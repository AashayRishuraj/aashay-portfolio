import { NextResponse } from "next/server";

export const revalidate = 3600;
const GITHUB_USER = "AashayRishuraj";

export async function GET() {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "Aashay-Rishuraj-Portfolio",
    };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

    const [profileResponse, repositoriesResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100&type=owner`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!profileResponse.ok || !repositoriesResponse.ok) {
      const status = !profileResponse.ok ? profileResponse.status : repositoriesResponse.status;
      return NextResponse.json(
        { error: status === 404 ? "GitHub profile was not found." : "GitHub data is temporarily unavailable." },
        { status: status === 404 ? 404 : 502 },
      );
    }

    const [profile, rawRepositories] = await Promise.all([
      profileResponse.json(),
      repositoriesResponse.json(),
    ]);

    const repositories = (rawRepositories as Array<Record<string, unknown>>)
      .filter((repo) => repo && repo.private !== true && repo.fork !== true)
      .sort((a, b) => new Date(String(b.pushed_at || b.updated_at || 0)).getTime()
        - new Date(String(a.pushed_at || a.updated_at || 0)).getTime())
      .slice(0, 12)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
      }));

    return NextResponse.json({
      profile: {
        public_repos: profile.public_repos,
        followers: profile.followers,
        html_url: profile.html_url,
      },
      repositories,
    }, { headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400" } });
  } catch (error) {
    console.error("GitHub API integration failed", error);
    return NextResponse.json({ error: "GitHub data is temporarily unavailable." }, { status: 502 });
  }
}
