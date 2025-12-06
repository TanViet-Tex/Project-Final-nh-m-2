import { createFileRoute } from "@tanstack/react-router";
import Login from "../../components/Pages/Login";

export const Route = createFileRoute("/login/")({
  component: Login,
});
