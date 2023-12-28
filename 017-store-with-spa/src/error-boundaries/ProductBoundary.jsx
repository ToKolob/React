import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ProductBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return (
          <h2>Product not found</h2>
        )
      case 401:
        return (
          <h2>Unauthorized</h2>
        )
      case 400:
        return (
          <h2>Bad request</h2>
        )
      case 500:
        return (
          <h2>Internal server error</h2>
        )
    }
  }

  return <h2>Error </h2>;
}