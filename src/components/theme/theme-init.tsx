export function ThemeInitScript() {
  const code = `
(function() {
  try {
    const savedMode = localStorage.getItem('carworlds-theme-mode') || 'light';
    const root = document.documentElement;
    root.setAttribute('data-theme-mode', savedMode);

    const savedHue = localStorage.getItem('carworlds-theme-hue');
    if (savedHue) root.style.setProperty('--theme-hue', savedHue);
  } catch(e) {}
})();
`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
