type ReportErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type ErrorCaptureEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: ReportErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __errorCaptureEvents?: ErrorCaptureEvents;
  }
}

/** Soft-report runtime errors to optional host hooks without throwing. */
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  window.__errorCaptureEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );

  if (import.meta.env.DEV) {
    const message =
      error instanceof Response
        ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
        : error instanceof Error
          ? error.message
          : String(error);
    console.error("[app]", message, context);
  }
}
