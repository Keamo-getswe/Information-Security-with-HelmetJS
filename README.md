# Information Security with HelmetJS

This project focuses on HelmetJS, a type of middleware for Express-based applications that automatically sets HTTP headers. This way it can prevent sensitive information from unintentionally being passed between the server and client. In it, the following was accomplished:

- Hide potentially dangerous information revealed from the X-Powered-By header.
- Mitigate the risk of clickjacking by setting X-Frame-Options.
- Mitigate the risk of cross-site scripting attacks through setting X-XSS-Protection to enable the browser’s built-in XSS filter, sanitizing input sent to our server. Deprecated.
- Avoid Inferring the Response MIME Type through setting X-Content-Type-Options.
- Prevent IE from Opening Untrusted HTML with X-Download-Options.
- Ask Browsers to Access Your Site via HTTPS Only with Strict-Transport-Security.
- Disable DNS Prefetching with X-DNS-Prefetch-Control. This mitigates risks of over-use of the DNS service, privacy issues, or page statistics alteration.
- Forcing users to always download the newer version of website by disabling Client-Side Caching. This was done by altering several headers but it outdated as it limited the use of various caching strategies.
- Mitigate the risk of cross-site scripting and data injection attacks by setting Content-Security-Policy to restrict allowed content sources. A modern solution to the deprecated X-XSS-Protection header.
- Configure Helmet Using the ‘parent’ helmet() Middleware. Includes all the settings introduced above, except cache control and content security policy. These must be manually set.

