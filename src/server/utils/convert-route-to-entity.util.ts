const mapping: Record<string, string> = {
  renamedclasses: 'Renamedclass',
  schools: 'school',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
