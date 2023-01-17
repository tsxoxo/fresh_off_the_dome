import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      light: '#FFFFFF',
      dark: '#2D1F3A',
      primary: '#848484',
    },
  },
  shortcuts: {
    'juicy-border': 'border-2 rounded-xl border-dark',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})
