class ColorConverter {
    static changeHexColorShade(color, percent) {
        // 헥사코드에서 RGB로 변환
        let hex = color.replace(/^#/, '');
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        // 진하기를 변경
        let t = percent < 0 ? 0 : 255;
        let p = percent < 0 ? percent * -1 : percent;
        let newR = Math.round((t - r) * p) + r;
        let newG = Math.round((t - g) * p) + g;
        let newB = Math.round((t - b) * p) + b;

        // RGB를 헥사코드로 변환
        let result = '#' + ((newR << 16) | (newG << 8) | newB).toString(16).padStart(6, '0');
        return result;
    }
}

export default ColorConverter;