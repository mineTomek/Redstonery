export default class BlockColors {
  private componentToHex(c: number): string {
    const hex = c.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  private hslToHex(h: number, s: number, l: number): string {
    const rgb = this.hslToRgb(h, s, l)
    return `0x${this.componentToHex(rgb[0])}${this.componentToHex(
      rgb[1]
    )}${this.componentToHex(rgb[2])}`
  }

  private hslToRgb(h: number, s: number, l: number): number[] {
    h /= 360
    s /= 100
    l /= 100

    let r, g, b

    if (s === 0) {
      r = g = b = l // Achromatic
    } else {
      const hueToRgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1 / 6) return p + (q - p) * 6 * t
        if (t < 1 / 2) return q
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
        return p
      }

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q

      r = hueToRgb(p, q, h + 1 / 3)
      g = hueToRgb(p, q, h)
      b = hueToRgb(p, q, h - 1 / 3)
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
  }

  generateColors(numberOfColors: number, saturation: number, lightness: number): string[] {
    const colors: string[] = []

    for (let i = 0; i < numberOfColors; i++) {
      const hue = (i / numberOfColors) * 360 // Distribute hues evenly
      const hexColor = this.hslToHex(hue, saturation, lightness) // Convert HSL to hex
      colors.push(hexColor)
    }

    return colors
  }
}
