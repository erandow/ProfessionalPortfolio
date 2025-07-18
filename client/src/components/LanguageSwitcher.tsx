import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸'
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪'
  },
  {
    code: 'fa',
    name: 'Persian',
    nativeName: 'فارسی',
    flag: '🇮🇷'
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇦🇪'
  }
];

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    
    // Get path segments and clean them up
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    // Check if the first segment is a language code
    const firstSegmentIsLang = languages.some(lang => lang.code === pathSegments[0]);
    
    // Create a new path with the new language
    let newPath;
    
    if (firstSegmentIsLang) {
      // Replace the language segment with the new language
      pathSegments[0] = lng;
      newPath = '/' + pathSegments.join('/');
    } else {
      // Add the language as the first segment
      newPath = '/' + lng + (location.pathname === '/' ? '' : location.pathname);
    }
    
    navigate(newPath, { replace: true });
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="h-8 gap-1 px-2"
        >
          <Globe className="h-4 w-4" />
          <span className="mx-1">{currentLanguage.flag}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => changeLanguage(language.code)}
          >
            <span>{language.flag}</span>
            <span>{language.nativeName}</span>
            {i18n.language === language.code && (
              <Check className="h-4 w-4 ml-auto" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}