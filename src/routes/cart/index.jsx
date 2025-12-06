import { createFileRoute } from "@tanstack/react-router";
import Cart from "../../components/Pages/Cart";

export const Route = createFileRoute("/cart/")({
  component: Cart,
});
