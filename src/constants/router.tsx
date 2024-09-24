import { createBrowserRouter } from "react-router-dom"

import { PageLayout } from "@layouts"
import { ErrorPage, ProductDetailPage, ProductListPage } from "@pages"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ProductListPage /> },
      { path: "/:id", element: <ProductDetailPage /> }
    ]
  }
])
