import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    }
  }

  return (
    <Button onClick={toggleTheme} size="icon" variant="outline">
      {theme === 'light' ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
