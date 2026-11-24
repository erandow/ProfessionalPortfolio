"use client";

import * as Menu from "@radix-ui/react-dropdown-menu";
import { Check, ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

type Option = {
  value: string;
  label: string;
  icon: ReactNode;
  lang?: string;
  dir?: "ltr" | "rtl";
};

type Props = {
  label: string;
  value: string;
  options: Option[];
  direction: "ltr" | "rtl";
  children: ReactNode;
  onChange: (value: string) => void;
};

export function PreferenceMenu({ label, value, options, direction, children, onChange }: Props) {
  const selected = options.find((option) => option.value === value);
  return (
    <Menu.Root modal={false} dir={direction}>
      <Menu.Trigger className="preference-trigger" aria-label={`${label} · ${selected?.label ?? value}`}>
        {children}
        <ChevronDown className="preference-chevron" size={12} aria-hidden="true" />
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Content className="preference-menu" align="end" sideOffset={6} collisionPadding={12} aria-label={label} loop>
          <Menu.Label className="preference-heading">{label}</Menu.Label>
          <Menu.RadioGroup value={value} onValueChange={onChange}>
            {options.map((option) => (
              <Menu.RadioItem key={option.value} value={option.value} textValue={option.label} className="preference-option">
                {option.icon}
                <bdi lang={option.lang} dir={option.dir}>{option.label}</bdi>
                <Menu.ItemIndicator className="preference-check"><Check size={15} aria-hidden="true" /></Menu.ItemIndicator>
              </Menu.RadioItem>
            ))}
          </Menu.RadioGroup>
        </Menu.Content>
      </Menu.Portal>
    </Menu.Root>
  );
}
