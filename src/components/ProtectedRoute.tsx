
// For now, we'll make the protected route always allow access
export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
