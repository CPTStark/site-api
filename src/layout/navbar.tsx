import { Headset } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';

export function Navbar() {
  function handleSupportClick() {
    window.open('https://www.linkedin.com/in/gabrielprestesperez/', '_blank');
  }

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
      <div>
        <SidebarTrigger className="-ml-1" />
        {/* <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                /> */}
      </div>
      <div className="flex items-center gap-2">
        <Button onClick={handleSupportClick} size="sm" variant="secondary">
          <Headset />
          Suporte
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}
