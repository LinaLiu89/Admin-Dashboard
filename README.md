A responsive admin dashboard built with React, Ant Design, and Chart.js.

## Tech Stack

- **React 19** — UI framework
- **Vite** — build tool and dev server
- **Ant Design 6** — component library (layout, table, badge, statistic, etc.)
- **React Router DOM** — client-side routing
- **Chart.js + react-chartjs-2** — bar chart for revenue visualization
- **DummyJSON API** — mock data source for orders, inventory, and customers

## Features

- Header with logo, title, mail and bell notification icons
- Sidebar navigation menu with icons
- Dashboard overview with live stats (orders, inventory, customers, revenue)
- Recent orders table fetched from API
- Revenue bar chart by user
- Orders page with paginated table and calculated totals
- Inventory page with product thumbnails, ratings, and stock info
- Customers page

## Project Structure

```
src/
├── API/              # Fetch functions (getOrders, getInventory, getCustomers)
├── Components/
│   ├── AppHeader/    # Top navigation bar
│   ├── AppFooter/    # Footer
│   ├── SideMenu/     # Left sidebar with route links
│   ├── PageContent/  # Main content area (wraps routes)
│   └── AppRoutes/    # Route definitions
└── Pages/
    ├── Dashboard/    # Stats cards, recent orders table, revenue chart
    ├── Orders/       # Full orders table
    ├── Inventory/    # Product inventory table
    └── Customers/    # Customer list
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Data Source

All data is fetched from [DummyJSON](https://dummyjson.com):

| Page | Endpoint |
|------|----------|
| Orders | `GET /carts` |
| Inventory | `GET /products` |
| Customers | `GET /users` |
