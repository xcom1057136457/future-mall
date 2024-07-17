import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetMini,
  presetTagify,
  presetTypography,
  presetUno,
  presetWind,
  transformerAttributifyJsx,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetMini(),
    presetTagify(),
    presetTypography(),
    presetWind(),
    presetRemToPx(),
  ],
  transformers: [
    transformerAttributifyJsx(),
    transformerCompileClass(),
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
