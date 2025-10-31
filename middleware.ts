import createMiddleware from "next-intl/middleware";
import { routing } from "./feature/i18n/routing";

// შექმენით next-intl middleware
export default createMiddleware(routing);

// რომელ გზებზე უნდა მუშაობდეს
export const config = {
  matcher: ["/", "/(en|ka|fr)/:path*"],
};
