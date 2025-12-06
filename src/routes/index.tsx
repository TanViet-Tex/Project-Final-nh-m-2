import { createFileRoute } from "@tanstack/react-router";
import Home from "../components/Pages/Home";

export const Route = createFileRoute("/")({
  component: Home,
});
