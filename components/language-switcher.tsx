"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { i18n } from "@/lib/i18n-config"

export function LanguageSwitcher({ locale }: { locale: string }) {
  const pathName = usePathname()
  const router = useRouter()

  const redirectedPathName = (newLocale: string) => {
    if (!pathName) return "/"

    const segments = pathName.split("/")
    segments[1] = newLocale
    return segments.join("/")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((l) => (
          <DropdownMenuItem
            key={l}
            className={l === locale ? "bg-muted" : ""}
            onClick={() => router.push(redirectedPathName(l))}
          >
            {l === "sv" ? "Svenska" : "English"}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

