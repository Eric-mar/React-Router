import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/discover","routes/discover.tsx"),
    route("/app","routes/app.tsx"),
    route("/setting","routes/setting.tsx",[
        route("app", "routes/setting/app.tsx"),
        route("profile","routes/setting/profile.tsx")
    ])
] satisfies RouteConfig;
