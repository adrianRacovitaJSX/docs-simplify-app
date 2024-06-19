import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/logo'

const config: DocsThemeConfig = {
  logo: <Logo />,
  footer: {
    text: 'Simplify Docs',
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Claro',
        dark: 'Oscuro',
        system: 'Sistema'
      }
    }
    
  },
  search: {
    placeholder: 'Buscar en la documentación',
  },
  primaryHue: 123,
  primarySaturation: 57,
  sidebar: {
    toggleButton: true,
  },
  toc: {
    backToTop: true,
    title: 'En esta página',
  },
  banner: {
    dismissible: true,
    text: '¡Iris (Tu IA personal): Disponible desde octubre de 2024! 🎉',
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
}

export default config
