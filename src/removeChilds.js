export function removeChild(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  };
}