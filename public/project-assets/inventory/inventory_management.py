import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from io import BytesIO

st.set_page_config(page_title="Inventory Dashboard", layout="wide")

st.title("📦 Inventory Management Dashboard")
st.markdown("""
Monitor your products with actionable insights:
- ✅ Best selling products  
- ⚠️ Products that are low or out of stock  
- 📊 Interactive charts and filters  
""")

uploaded_file = st.file_uploader("Upload your inventory Excel file", type=["xlsx"])

if uploaded_file is not None:

    df = pd.read_excel(uploaded_file)

    df.columns = df.columns.str.strip()

    st.write("Available columns:", df.columns)

    if 'Current Stock' in df.columns:
        df = df.rename(columns={'Current Stock': 'Stock'})
    if 'Reorder Point' in df.columns:
        df = df.rename(columns={'Reorder Point': 'ReorderLevel'})
    if 'Product Name' in df.columns:
        df = df.rename(columns={'Product Name': 'ProductName'})

    required_cols = ['Stock', 'ReorderLevel', 'ProductName']
    if not all(col in df.columns for col in required_cols):
        st.error(f"Required columns missing! Please ensure {required_cols} are present.")
    else:

        if 'TotalSales' not in df.columns:
            np.random.seed(42)
            df['TotalSales'] = np.random.randint(100, 1000, size=len(df))

        df['StockStatus'] = df.apply(lambda row: 'Out of Stock' if row['Stock'] == 0 else
                                     ('Low Stock' if row['Stock'] <= row['ReorderLevel'] else 'In Stock'), axis=1)

        st.sidebar.header("Filter Options")
        product_names = df["ProductName"].unique()
        selected_products = st.sidebar.multiselect("Select Products", product_names, default=product_names)
        stock_status_options = st.sidebar.multiselect("Select Stock Status", ["In Stock", "Low Stock", "Out of Stock"],
                                                     default=["In Stock", "Low Stock", "Out of Stock"])

        filtered_df = df[df["ProductName"].isin(selected_products) & df["StockStatus"].isin(stock_status_options)]

        st.subheader("📊 Summary")
        col1, col2, col3 = st.columns(3)
        col1.metric("Total Products", len(df))
        col2.metric("Low or Out of Stock", len(df[df['StockStatus'].isin(['Low Stock', 'Out of Stock'])]))
        col3.metric("Best Sellers", len(df[df['TotalSales'] >= df['TotalSales'].quantile(0.9)]))

        st.subheader("📂 Inventory Data")
        st.dataframe(filtered_df)

        st.subheader("🔥 Best Selling Products")
        top_sellers = df[df['TotalSales'] >= df['TotalSales'].quantile(0.9)]
        st.dataframe(top_sellers[['ProductName', 'TotalSales']])

        st.subheader("⚠️ Products That Need Restocking")
        restock_df = df[df['StockStatus'].isin(['Low Stock', 'Out of Stock'])]
        st.dataframe(restock_df[['ProductName', 'Stock', 'ReorderLevel', 'StockStatus']])

        st.subheader("📊 Stock vs Reorder Level")
        plt.figure(figsize=(12, 6))
        sns.barplot(data=filtered_df, x="ProductName", y="Stock", label="Stock", color="blue")
        sns.barplot(data=filtered_df, x="ProductName", y="ReorderLevel", label="Reorder Level", color="red")
        plt.xticks(rotation=45, ha="right")
        plt.ylabel("Quantity")
        plt.legend()
        st.pyplot(plt.gcf())
        plt.clf()

        st.subheader("📈 Stock Status Distribution")
        status_counts = filtered_df["StockStatus"].value_counts()
        fig, ax = plt.subplots()
        ax.pie(status_counts, labels=status_counts.index, autopct='%1.1f%%', startangle=90)
        ax.axis('equal')
        st.pyplot(fig)

        st.subheader("📥 Download Filtered Data")
        output = BytesIO()
        filtered_df.to_excel(output, index=False)
        output.seek(0)
        st.download_button("Download as Excel", data=output,
                           file_name="filtered_inventory.xlsx",
                           mime="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")

else:
    st.info("Please upload your inventory Excel file to start.")
