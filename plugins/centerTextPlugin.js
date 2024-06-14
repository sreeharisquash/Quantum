// plugins/centerTextPlugin.js
export const centerTextPlugin = {
  id: "centerTextPlugin",
  afterDraw: function (chart) {
    const ctx = chart.ctx;
    const width = chart.width;
    const height = chart.height;
    const dataset = chart.data.datasets[0];
    const total = dataset.data.reduce((acc, value) => acc + value, 0);
    const value = dataset.data[0];
    const percentage = ((value / total) * 100).toFixed(1);

    ctx.save();
    ctx.font = "bold 20px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#000";
    ctx.fillText(`${percentage}%`, width / 2, height / 2);
    ctx.restore();
  },
};
