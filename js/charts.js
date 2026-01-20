// 蒼鼎國際法律事務所 - 服務項目圓餅圖

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('servicesChart');

    if (!ctx) return;

    // 服務項目數據
    const servicesData = {
        labels: ['民事訴訟', '刑事訴訟', '家事訴訟', '企業法律顧問', '法律文件代撰'],
        datasets: [{
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
                '#1B3A2F',  // 深林綠 - 民事
                '#C5A572',  // 經典金 - 刑事
                '#0369A1',  // CTA 藍 - 家事
                '#334155',  // 專業灰 - 企業
                '#64748B',  // 淺灰 - 文件
            ],
            borderColor: '#ffffff',
            borderWidth: 3,
            hoverOffset: 15,
            hoverBorderWidth: 4,
        }]
    };

    // 圖表配置
    const config = {
        type: 'doughnut',
        data: servicesData,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            cutout: '55%',
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    backgroundColor: '#1B3A2F',
                    titleColor: '#C5A572',
                    bodyColor: '#ffffff',
                    titleFont: {
                        size: 14,
                        weight: 'bold',
                        family: "'EB Garamond', 'Noto Serif TC', serif"
                    },
                    bodyFont: {
                        size: 13,
                        family: "'Lato', 'Noto Sans TC', sans-serif"
                    },
                    padding: 12,
                    cornerRadius: 8,
                    displayColors: true,
                    callbacks: {
                        label: function (context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            return ` ${label}: ${value}%`;
                        }
                    }
                }
            },
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 1000,
                easing: 'easeOutQuart'
            },
            onClick: function (event, elements) {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const serviceLinks = [
                        '#civil',      // 民事訴訟
                        '#criminal',   // 刑事訴訟
                        '#family',     // 家事訴訟
                        '#corporate',  // 企業法律顧問
                        '#documents',  // 法律文件
                    ];

                    // Navigate to services page with anchor
                    window.location.href = 'services.html' + serviceLinks[index];
                }
            },
            onHover: function (event, elements) {
                event.native.target.style.cursor = elements.length ? 'pointer' : 'default';
            }
        }
    };

    // 創建圖表
    const servicesChart = new Chart(ctx, config);

    // 中心文字
    const centerTextPlugin = {
        id: 'centerText',
        beforeDraw: function (chart) {
            const { ctx, width, height } = chart;
            ctx.restore();

            // 主文字
            const fontSize = (height / 160).toFixed(2);
            ctx.font = `bold ${fontSize}em "EB Garamond", "Noto Serif TC", serif`;
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            ctx.fillStyle = '#1B3A2F';
            ctx.fillText('5大', width / 2, height / 2 - 10);

            // 副文字
            ctx.font = `${fontSize * 0.6}em "Lato", "Noto Sans TC", sans-serif`;
            ctx.fillStyle = '#C5A572';
            ctx.fillText('服務項目', width / 2, height / 2 + 20);

            ctx.save();
        }
    };

    // 註冊插件
    Chart.register(centerTextPlugin);

    // 更新圖表以顯示中心文字
    servicesChart.update();
});
