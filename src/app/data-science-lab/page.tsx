"use client";

import { useMemo, useState } from "react";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Line, LineChart,
  Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { Activity, BarChart3, BrainCircuit, Database, SlidersHorizontal, Sparkles } from "lucide-react";

type Order = { month: string; revenue: number; orders: number; returns: number; channel: string };
const sample: Order[] = [
  { month: "Jan", revenue: 18200, orders: 124, returns: 8, channel: "Online" },
  { month: "Feb", revenue: 21400, orders: 148, returns: 10, channel: "Retail" },
  { month: "Mar", revenue: 19800, orders: 137, returns: 7, channel: "Online" },
  { month: "Apr", revenue: 26300, orders: 176, returns: 12, channel: "Retail" },
  { month: "May", revenue: 24700, orders: 169, returns: 9, channel: "Online" },
  { month: "Jun", revenue: 30200, orders: 213, returns: 11, channel: "Retail" },
  { month: "Jul", revenue: 28900, orders: 201, returns: 13, channel: "Online" },
  { month: "Aug", revenue: 33600, orders: 232, returns: 10, channel: "Retail" },
];
const channelMix = [{ name: "Online", value: 58 }, { name: "Retail", value: 42 }];
const palette = ["#6bd7f5", "#a78bfa"];
const money = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function Lab() {
  const [channel, setChannel] = useState("All");
  const [months, setMonths] = useState(8);
  const [activeTab, setActiveTab] = useState("overview");
  const [sql, setSql] = useState("SELECT month, SUM(revenue) AS revenue\nFROM orders\nGROUP BY month\nORDER BY month;");
  const [inspected, setInspected] = useState(false);
  const rows = useMemo(() => sample.slice(0, months).filter((r) => channel === "All" || r.channel === channel), [channel, months]);
  const totals = useMemo(() => rows.reduce((a, r) => ({ revenue: a.revenue + r.revenue, orders: a.orders + r.orders, returns: a.returns + r.returns }), { revenue: 0, orders: 0, returns: 0 }), [rows]);
  const averageOrderValue = totals.orders ? Math.round(totals.revenue / totals.orders) : 0;
  const returnRate = totals.orders ? (totals.returns / totals.orders) * 100 : 0;

  return <>
    <header className="page-hero">
      <div className="eyebrow">EXPERIMENTATION / DATA SCIENCE LAB</div>
      <h1 className="page-title">Explore the thinking behind the numbers.</h1>
      <p>Interactive analytics playground demonstrating how I explore data, frame business questions and communicate findings.</p>
    </header>
    <section className="container" style={{ paddingTop: 20, paddingBottom: 72 }}>
      <div className="panel" style={{ marginBottom: 20, display: "flex", gap: 12, alignItems: "flex-start" }}>
        <Sparkles size={20} aria-hidden="true" />
        <div><strong>Demonstration dataset</strong><p style={{ margin: "5px 0 0", color: "var(--muted)" }}>All figures in this lab are synthetic sample data created to demonstrate the interface. They are not results from Aashay&apos;s projects or real business records.</p></div>
      </div>
      <div className="content-grid">
        <article className="panel" style={{ gridColumn: "1 / -1" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <div><div className="eyebrow">INTERACTIVE EXPLORER</div><h2 style={{ margin: "6px 0" }}>Sales performance overview</h2><p style={{ margin: 0, color: "var(--muted)" }}>Change the filters to explore how the summary and charts respond.</p></div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 8 }}> <SlidersHorizontal size={16}/><span className="sr-only">Sales channel</span><select value={channel} onChange={(e) => setChannel(e.target.value)} className="button" aria-label="Filter by sales channel"><option>All</option><option>Online</option><option>Retail</option></select></label>
              <label style={{ display: "flex", alignItems: "center", gap: 8 }}>Months <select value={months} onChange={(e) => setMonths(Number(e.target.value))} className="button" aria-label="Select number of months"><option value={4}>4</option><option value={6}>6</option><option value={8}>8</option></select></label>
            </div>
          </div>
          <div className="content-grid" style={{ marginTop: 22 }}>
            {[{ label: "Total revenue", value: money(totals.revenue), icon: <Database size={18}/> }, { label: "Orders", value: totals.orders.toLocaleString("en-IN"), icon: <Activity size={18}/> }, { label: "Average order value", value: money(averageOrderValue), icon: <BarChart3 size={18}/> }, { label: "Return rate", value: `${returnRate.toFixed(1)}%`, icon: <BrainCircuit size={18}/> }].map((metric) => <div className="panel" key={metric.label} style={{ padding: 16 }}><div style={{ color: "var(--muted)", display: "flex", justifyContent: "space-between", gap: 8 }}>{metric.label}{metric.icon}</div><div style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, marginTop: 10 }}>{metric.value}</div></div>)}
          </div>
          <div className="content-grid" style={{ marginTop: 18 }}>
            <div className="panel"><h3>Revenue trend</h3><p style={{ color: "var(--muted)" }}>Monthly revenue · INR</p><div className="chart-wrap"><ResponsiveContainer width="100%" height="100%"><AreaChart data={rows}><defs><linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6bd7f5" stopOpacity={0.35}/><stop offset="95%" stopColor="#6bd7f5" stopOpacity={0}/></linearGradient></defs><CartesianGrid strokeDasharray="3 3" stroke="var(--line)"/><XAxis dataKey="month" stroke="var(--muted)"/><YAxis stroke="var(--muted)" tickFormatter={(v) => `${Math.round(Number(v) / 1000)}k`}/><Tooltip formatter={(v) => money(Number(v))}/><Area type="monotone" dataKey="revenue" stroke="#6bd7f5" fill="url(#revenueFill)" strokeWidth={2.5}/></AreaChart></ResponsiveContainer></div></div>
            <div className="panel"><h3>Order volume</h3><p style={{ color: "var(--muted)" }}>Orders per month</p><div className="chart-wrap"><ResponsiveContainer width="100%" height="100%"><BarChart data={rows}><CartesianGrid strokeDasharray="3 3" stroke="var(--line)"/><XAxis dataKey="month" stroke="var(--muted)"/><YAxis stroke="var(--muted)"/><Tooltip/><Bar dataKey="orders" radius={[5,5,0,0]}>{rows.map((r) => <Cell key={r.month} fill={r.channel === "Online" ? palette[0] : palette[1]}/>)}</Bar></BarChart></ResponsiveContainer></div></div>
          </div>
          <div className="content-grid" style={{ marginTop: 18 }}>
            <div className="panel"><h3>Channel mix</h3><p style={{ color: "var(--muted)" }}>Illustrative overall split</p><div className="chart-wrap"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={channelMix} dataKey="value" nameKey="name" innerRadius={58} outerRadius={88} paddingAngle={4}>{channelMix.map((entry, i) => <Cell key={entry.name} fill={palette[i]}/>)}</Pie><Tooltip formatter={(v) => `${v}%`}/></PieChart></ResponsiveContainer></div><p style={{ color: "var(--muted)", textAlign: "center" }}>Online 58% · Retail 42%</p></div>
            <div className="panel"><h3>Analyst&apos;s readout</h3><ul style={{ color: "var(--muted)", paddingLeft: 20, lineHeight: 1.8 }}><li>{rows.length ? `The selected view contains ${totals.orders} orders across ${rows.length} months.` : "No rows match the selected filters."}</li><li>{rows.length ? `Average order value is ${money(averageOrderValue)}.` : "Try another channel or month range."}</li><li>Revenue trend should be checked alongside margin, acquisition cost and seasonality before making a business recommendation.</li></ul></div>
          </div>
        </article>
        <article className="panel" style={{ gridColumn: "1 / -1" }}>
          <div className="eyebrow">SQL WORKSPACE</div><h2 style={{ margin: "6px 0" }}>Inspect a query</h2><p style={{ color: "var(--muted)" }}>Review a sample SQL statement and inspect its structure. This is a teaching aid; it does not execute SQL or connect to a database.</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "14px 0" }} role="tablist" aria-label="SQL examples">{[{ id: "overview", label: "Revenue by month" }, { id: "category", label: "Orders by channel" }, { id: "returns", label: "Return rate" }].map((t) => <button key={t.id} className={`button ${activeTab === t.id ? "primary" : ""}`} onClick={() => { setActiveTab(t.id); setInspected(false); setSql(t.id === "overview" ? "SELECT month, SUM(revenue) AS revenue\nFROM orders\nGROUP BY month\nORDER BY month;" : t.id === "category" ? "SELECT channel, COUNT(*) AS orders\nFROM orders\nGROUP BY channel\nORDER BY orders DESC;" : "SELECT SUM(returns) * 100.0 / SUM(orders) AS return_rate\nFROM monthly_summary;") }}>{t.label}</button>)}</div>
          <textarea value={sql} onChange={(e) => { setSql(e.target.value); setInspected(false); }} aria-label="SQL example editor" style={{ width: "100%", minHeight: 150, background: "var(--bg)", color: "var(--text)", border: "1px solid var(--line)", borderRadius: 10, padding: 14, fontFamily: "ui-monospace, SFMono-Regular, monospace", lineHeight: 1.6 }}/>
          <button className="button primary" style={{ marginTop: 12 }} onClick={() => setInspected(true)}>Inspect query structure</button>
          {inspected && <div className="panel" style={{ marginTop: 14 }}><strong>Query inspection</strong><p style={{ color: "var(--muted)" }}>Detected {sql.trim().split(/\s+/).filter(Boolean).length} tokens, {((sql.match(/\bSELECT\b/gi) || []).length)} SELECT clause(s), {((sql.match(/\bFROM\b/gi) || []).length)} FROM clause(s), {((sql.match(/\bGROUP BY\b/gi) || []).length)} GROUP BY clause(s), and {((sql.match(/\bORDER BY\b/gi) || []).length)} ORDER BY clause(s). This is a lightweight text inspection, not a SQL parser or execution engine.</p></div>}
        </article>
      </div>
    </section>
  </>;
}
