
const MOCK_DB = {
  AOI: {
    "Layer 1 (TOP)": {
      "BRD-88210-01": {
        totalPcs: 400, machine: "AOI-05",
        defects: [
          { code: "E01", name: "Ngắn mạch", color: "red", positions: [12, 45, 78, 156] },
          { code: "W04", name: "Thiếu linh kiện", color: "orange", positions: [23, 67, 89, 134, 201, 345] },
          { code: "M12", name: "Dính hàn", color: "yellow", positions: [99, 250, 310] },
        ]
      },
      "BRD-88210-02": {
        totalPcs: 400, machine: "AOI-05",
        defects: [
          { code: "E01", name: "Ngắn mạch", color: "red", positions: [5, 200] },
          { code: "E03", name: "Hở mạch", color: "red", positions: [150, 300, 355] },
          { code: "W04", name: "Thiếu linh kiện", color: "orange", positions: [30, 60] },
        ]
      },
      "BRD-88210-03": {
        totalPcs: 400, machine: "AOI-05",
        defects: [
          { code: "M12", name: "Dính hàn", color: "yellow", positions: [18, 72, 144, 288] },
          { code: "M15", name: "Lệch linh kiện", color: "yellow", positions: [55, 110, 220] },
        ]
      }
    },
    "Layer 2 (BOTTOM)": {
      "BRD-88210-01": {
        totalPcs: 400, machine: "AOI-05",
        defects: [
          { code: "E01", name: "Ngắn mạch", color: "red", positions: [33, 177] },
          { code: "W04", name: "Thiếu linh kiện", color: "orange", positions: [88, 144, 256] },
        ]
      },
      "BRD-88210-02": {
        totalPcs: 400, machine: "AOI-05",
        defects: [
          { code: "W04", name: "Thiếu linh kiện", color: "orange", positions: [10, 50, 100, 150, 200] },
          { code: "M12", name: "Dính hàn", color: "yellow", positions: [75, 300] },
        ]
      },
      "BRD-88210-03": {
        totalPcs: 400, machine: "AOI-05",
        defects: [
          { code: "E01", name: "Ngắn mạch", color: "red", positions: [22] },
        ]
      }
    },
    "Internal 1": {
      "BRD-88210-01": {
        totalPcs: 400, machine: "AOI-05",
        defects: [
          { code: "E01", name: "Ngắn mạch", color: "red", positions: [100, 200, 300] },
        ]
      },
      "BRD-88210-02": {
        totalPcs: 400, machine: "AOI-05",
        defects: []
      },
      "BRD-88210-03": {
        totalPcs: 400, machine: "AOI-05",
        defects: [
          { code: "M12", name: "Dính hàn", color: "yellow", positions: [15, 30, 45, 60, 75] },
        ]
      }
    }
  },
  AVI: {
    "Layer 1 (TOP)": {
      "BRD-88210-01": {
        totalPcs: 400, machine: "AVI-02",
        defects: [
          { code: "V01", name: "Trầy xước", color: "orange", positions: [14, 28, 56, 112, 224] },
          { code: "V02", name: "Bẩn bề mặt", color: "yellow", positions: [33, 66, 99] },
        ]
      },
      "BRD-88210-02": {
        totalPcs: 400, machine: "AVI-02",
        defects: [
          { code: "V01", name: "Trầy xước", color: "orange", positions: [7, 140, 280] },
          { code: "V03", name: "Ố vàng", color: "red", positions: [199, 350] },
        ]
      },
      "BRD-88210-03": {
        totalPcs: 400, machine: "AVI-02",
        defects: [
          { code: "V02", name: "Bẩn bề mặt", color: "yellow", positions: [50, 100, 150, 200, 250, 300, 350] },
        ]
      }
    },
    "Layer 2 (BOTTOM)": {
      "BRD-88210-01": {
        totalPcs: 400, machine: "AVI-02", defects: [
          { code: "V01", name: "Trầy xước", color: "orange", positions: [20, 40] },
        ]
      },
      "BRD-88210-02": { totalPcs: 400, machine: "AVI-02", defects: [] },
      "BRD-88210-03": {
        totalPcs: 400, machine: "AVI-02", defects: [
          { code: "V03", name: "Ố vàng", color: "red", positions: [180] },
        ]
      }
    },
    "Internal 1": {
      "BRD-88210-01": { totalPcs: 400, machine: "AVI-02", defects: [] },
      "BRD-88210-02": {
        totalPcs: 400, machine: "AVI-02", defects: [
          { code: "V02", name: "Bẩn bề mặt", color: "yellow", positions: [25, 50, 75] },
        ]
      },
      "BRD-88210-03": { totalPcs: 400, machine: "AVI-02", defects: [] }
    }
  },
  ETEST: {
    "Layer 1 (TOP)": {
      "BRD-88210-01": {
        totalPcs: 400, machine: "ET-10",
        defects: [
          { code: "T01", name: "Hở mạch điện", color: "red", positions: [8, 16, 32, 64, 128, 256] },
          { code: "T02", name: "Trở kháng sai", color: "orange", positions: [44, 88, 176] },
        ]
      },
      "BRD-88210-02": {
        totalPcs: 400, machine: "ET-10", defects: [
          { code: "T01", name: "Hở mạch điện", color: "red", positions: [3, 6, 12] },
        ]
      },
      "BRD-88210-03": {
        totalPcs: 400, machine: "ET-10", defects: [
          { code: "T02", name: "Trở kháng sai", color: "orange", positions: [100, 200, 300, 399] },
          { code: "T03", name: "Rò điện", color: "yellow", positions: [55, 155] },
        ]
      }
    },
    "Layer 2 (BOTTOM)": {
      "BRD-88210-01": {
        totalPcs: 400, machine: "ET-10", defects: [
          { code: "T01", name: "Hở mạch điện", color: "red", positions: [50, 150, 250, 350] },
        ]
      },
      "BRD-88210-02": { totalPcs: 400, machine: "ET-10", defects: [] },
      "BRD-88210-03": {
        totalPcs: 400, machine: "ET-10", defects: [
          { code: "T03", name: "Rò điện", color: "yellow", positions: [10, 20, 30] },
        ]
      }
    },
    "Internal 1": {
      "BRD-88210-01": { totalPcs: 400, machine: "ET-10", defects: [] },
      "BRD-88210-02": {
        totalPcs: 400, machine: "ET-10", defects: [
          { code: "T01", name: "Hở mạch điện", color: "red", positions: [77, 154] },
        ]
      },
      "BRD-88210-03": { totalPcs: 400, machine: "ET-10", defects: [] }
    }
  },
  "VISUAL 1": {
    "Layer 1 (TOP)": {
      "BRD-88210-01": {
        totalPcs: 400, machine: "VS-01", defects: [
          { code: "S01", name: "Nứt board", color: "red", positions: [19, 38, 57] },
          { code: "S02", name: "Cong vênh", color: "orange", positions: [111, 222, 333] },
        ]
      },
      "BRD-88210-02": {
        totalPcs: 400, machine: "VS-01", defects: [
          { code: "S03", name: "Mất mực in", color: "yellow", positions: [40, 80, 120, 160] },
        ]
      },
      "BRD-88210-03": {
        totalPcs: 400, machine: "VS-01", defects: [
          { code: "S01", name: "Nứt board", color: "red", positions: [199] },
          { code: "S02", name: "Cong vênh", color: "orange", positions: [5, 10, 15, 20] },
        ]
      }
    },
    "Layer 2 (BOTTOM)": {
      "BRD-88210-01": { totalPcs: 400, machine: "VS-01", defects: [] },
      "BRD-88210-02": {
        totalPcs: 400, machine: "VS-01", defects: [
          { code: "S01", name: "Nứt board", color: "red", positions: [299, 300] },
        ]
      },
      "BRD-88210-03": {
        totalPcs: 400, machine: "VS-01", defects: [
          { code: "S03", name: "Mất mực in", color: "yellow", positions: [50, 100] },
        ]
      }
    },
    "Internal 1": {
      "BRD-88210-01": {
        totalPcs: 400, machine: "VS-01", defects: [
          { code: "S02", name: "Cong vênh", color: "orange", positions: [66, 132, 198, 264, 330] },
        ]
      },
      "BRD-88210-02": { totalPcs: 400, machine: "VS-01", defects: [] },
      "BRD-88210-03": { totalPcs: 400, machine: "VS-01", defects: [] }
    }
  },
  "VISUAL 2": {
    "Layer 1 (TOP)": {
      "BRD-88210-01": {
        totalPcs: 400, machine: "VS-02", defects: [
          { code: "F01", name: "Thiếu solder mask", color: "red", positions: [11, 22, 33, 44] },
          { code: "F02", name: "Bọt khí", color: "yellow", positions: [55, 110, 165, 220, 275, 330, 385] },
        ]
      },
      "BRD-88210-02": {
        totalPcs: 400, machine: "VS-02", defects: [
          { code: "F01", name: "Thiếu solder mask", color: "red", positions: [90] },
          { code: "F03", name: "Sai màu", color: "orange", positions: [170, 340] },
        ]
      },
      "BRD-88210-03": { totalPcs: 400, machine: "VS-02", defects: [] }
    },
    "Layer 2 (BOTTOM)": {
      "BRD-88210-01": {
        totalPcs: 400, machine: "VS-02", defects: [
          { code: "F02", name: "Bọt khí", color: "yellow", positions: [13, 26, 39] },
        ]
      },
      "BRD-88210-02": {
        totalPcs: 400, machine: "VS-02", defects: [
          { code: "F01", name: "Thiếu solder mask", color: "red", positions: [100, 200] },
          { code: "F03", name: "Sai màu", color: "orange", positions: [50, 150, 250, 350] },
        ]
      },
      "BRD-88210-03": {
        totalPcs: 400, machine: "VS-02", defects: [
          { code: "F02", name: "Bọt khí", color: "yellow", positions: [77] },
        ]
      }
    },
    "Internal 1": {
      "BRD-88210-01": { totalPcs: 400, machine: "VS-02", defects: [] },
      "BRD-88210-02": { totalPcs: 400, machine: "VS-02", defects: [] },
      "BRD-88210-03": {
        totalPcs: 400, machine: "VS-02", defects: [
          { code: "F01", name: "Thiếu solder mask", color: "red", positions: [1, 399] },
        ]
      }
    }
  }
};

// ============================================================
// COLOR CONFIG
// ============================================================
const COLOR_MAP = {
  red: {
    cell: "bg-red-500 border border-red-600 shadow-sm",
    bg: "bg-red-50 dark:bg-red-900/10", border: "border-red-100 dark:border-red-900/30",
    badge: "bg-red-500", text: "text-red-600 dark:text-red-400", darkLabel: "dark:text-red-200",
    legendCell: "bg-red-500", legendLabel: "Lỗi nghiêm trọng"
  },
  orange: {
    cell: "bg-orange-500 border border-orange-600 shadow-sm",
    bg: "bg-orange-50 dark:bg-orange-900/10", border: "border-orange-100 dark:border-orange-900/30",
    badge: "bg-orange-500", text: "text-orange-600 dark:text-orange-400", darkLabel: "dark:text-orange-200",
    legendCell: "bg-orange-500", legendLabel: "Cảnh báo"
  },
  yellow: {
    cell: "bg-yellow-400 border border-yellow-500 shadow-sm",
    bg: "bg-yellow-50 dark:bg-yellow-900/10", border: "border-yellow-100 dark:border-yellow-900/30",
    badge: "bg-yellow-400", text: "text-yellow-600 dark:text-yellow-400", darkLabel: "dark:text-yellow-200",
    legendCell: "bg-yellow-400", legendLabel: "Lỗi nhẹ"
  },
};

// ============================================================
// STATE
// ============================================================
let currentStage = "AOI";
let currentTooltip = null;

// ============================================================
// DOM READY
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  // Initial render
  renderAll();

  // ---- Stage selector ----
  const stageSelector = document.getElementById("stageSelector");
  stageSelector.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    currentStage = btn.textContent.trim();
    // Update active tab style
    stageSelector.querySelectorAll("button").forEach(b => {
      b.className = "px-4 py-1.5 rounded-lg text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200";
    });
    btn.className = "px-4 py-1.5 rounded-lg text-sm font-semibold bg-primary text-white shadow-sm";
    renderAll();
  });

  // ---- Layer / Board selects ----
  document.getElementById("layerSelect").addEventListener("change", () => renderAll());
  document.getElementById("boardSelect").addEventListener("change", () => renderAll());

  // ---- Search button ----
  document.getElementById("searchBtn").addEventListener("click", () => {
    const productId = document.getElementById("productIdInput").value.trim();
    const lotId = document.getElementById("lotIdInput").value.trim();
    // Simulate search: hiện thông báo và re-render
    if (productId || lotId) {
      showToast(`Đang tìm kiếm: Product=${productId || "—"}, Lot=${lotId || "—"}`);
    }
    renderAll();
  });

  // ---- Export PDF ----
  document.getElementById("exportPdfBtn").addEventListener("click", () => {
    const data = getCurrentData();
    if (!data) return;
    showToast("Đang xuất báo cáo PDF...");
    setTimeout(() => showToast(" Đã xuất báo cáo PDF thành công!"), 1500);
  });

  // ---- Export CSV ----
  document.getElementById("exportCsvBtn").addEventListener("click", () => {
    const data = getCurrentData();
    if (!data) return;
    exportCSV(data);
  });

  // ---- Close tooltip on outside click ----
  document.addEventListener("click", (e) => {
    if (currentTooltip && !e.target.closest(".defect-cell") && !e.target.closest(".cell-tooltip")) {
      removeTooltip();
    }
  });
});

// ============================================================
// HELPERS
// ============================================================
function getCurrentData() {
  const layer = document.getElementById("layerSelect").value;
  const board = document.getElementById("boardSelect").value;
  const stageData = MOCK_DB[currentStage];
  if (!stageData || !stageData[layer] || !stageData[layer][board]) return null;
  return stageData[layer][board];
}

function renderAll() {
  const data = getCurrentData();
  if (!data) return;
  renderGrid(data);
  renderLegend(data);
  renderDefectCodes(data);
  updateFooter(data);
}

// ============================================================
// GRID RENDERING
// ============================================================
function renderGrid(data) {
  const grid = document.getElementById("gridMapping");
  grid.innerHTML = "";

  // Build position → defect map
  const posMap = {};
  for (const d of data.defects) {
    for (const p of d.positions) {
      posMap[p] = d;
    }
  }

  for (let i = 0; i < data.totalPcs; i++) {
    const cell = document.createElement("div");
    const defect = posMap[i];
    let statusClass, label = "";

    if (defect) {
      const c = COLOR_MAP[defect.color];
      statusClass = c.cell;
      label = defect.code;
    } else {
      statusClass = "bg-emerald-500/20 dark:bg-emerald-500/10 border border-emerald-500/30";
    }

    cell.className = `defect-cell rounded-sm flex items-center justify-center cursor-pointer ${statusClass}`;
    cell.dataset.index = i;

    if (label) {
      cell.innerHTML = `<span class="text-[8px] font-bold text-white">${label}</span>`;
    }

    // Click → show tooltip
    cell.addEventListener("click", (e) => {
      e.stopPropagation();
      removeTooltip();
      const row = Math.floor(i / 20) + 1;
      const col = (i % 20) + 1;
      let info = `<b>Vị trí:</b> Hàng ${row}, Cột ${col}<br><b>Index:</b> ${i}`;
      if (defect) {
        info += `<br><b>Mã lỗi:</b> ${defect.code}<br><b>Loại:</b> ${defect.name}`;
      } else {
        info += `<br><b>Trạng thái:</b> OK`;
      }
      showCellTooltip(cell, info);
    });

    grid.appendChild(cell);
  }
}

// ============================================================
// TOOLTIP
// ============================================================
function showCellTooltip(anchor, html) {
  removeTooltip();
  const tip = document.createElement("div");
  tip.className = "cell-tooltip";
  tip.innerHTML = html;
  document.body.appendChild(tip);
  currentTooltip = tip;

  const rect = anchor.getBoundingClientRect();
  tip.style.left = rect.left + rect.width / 2 - tip.offsetWidth / 2 + "px";
  tip.style.top = rect.top - tip.offsetHeight - 8 + window.scrollY + "px";
}

function removeTooltip() {
  if (currentTooltip) {
    currentTooltip.remove();
    currentTooltip = null;
  }
}

// ============================================================
// LEGEND
// ============================================================
function renderLegend(data) {
  const container = document.getElementById("legendContainer");
  // Count
  const counts = { red: 0, orange: 0, yellow: 0 };
  for (const d of data.defects) {
    counts[d.color] = (counts[d.color] || 0) + d.positions.length;
  }
  const totalDefects = counts.red + counts.orange + counts.yellow;
  const okCount = data.totalPcs - totalDefects;

  let html = `
    <div class="flex items-center gap-2">
      <div class="w-4 h-4 rounded-sm bg-emerald-500/20 border border-emerald-500/30"></div>
      <span class="text-xs font-medium text-slate-500 dark:text-slate-400">Normal / OK (${okCount})</span>
    </div>`;

  if (counts.red > 0) {
    html += `
    <div class="flex items-center gap-2">
      <div class="w-4 h-4 rounded-sm bg-red-500"></div>
      <span class="text-xs font-medium text-slate-500 dark:text-slate-400">Lỗi nghiêm trọng (${counts.red})</span>
    </div>`;
  }
  if (counts.orange > 0) {
    html += `
    <div class="flex items-center gap-2">
      <div class="w-4 h-4 rounded-sm bg-orange-500"></div>
      <span class="text-xs font-medium text-slate-500 dark:text-slate-400">Cảnh báo (${counts.orange})</span>
    </div>`;
  }
  if (counts.yellow > 0) {
    html += `
    <div class="flex items-center gap-2">
      <div class="w-4 h-4 rounded-sm bg-yellow-400"></div>
      <span class="text-xs font-medium text-slate-500 dark:text-slate-400">Lỗi nhẹ (${counts.yellow})</span>
    </div>`;
  }

  container.innerHTML = html;
}

// ============================================================
// DEFECT CODES PANEL
// ============================================================
function renderDefectCodes(data) {
  const container = document.getElementById("defectCodesContainer");
  if (data.defects.length === 0) {
    container.innerHTML = `<p class="text-sm text-slate-400 dark:text-slate-500 text-center py-4">Không có lỗi nào được phát hiện ✅</p>`;
    return;
  }

  // Group by code
  const grouped = {};
  for (const d of data.defects) {
    if (!grouped[d.code]) {
      grouped[d.code] = { ...d, count: d.positions.length };
    } else {
      grouped[d.code].count += d.positions.length;
    }
  }

  let html = "";
  for (const code of Object.keys(grouped)) {
    const d = grouped[code];
    const c = COLOR_MAP[d.color];
    html += `
      <div class="flex items-center justify-between p-2 rounded-lg ${c.bg} border ${c.border}">
        <div class="flex items-center gap-3">
          <span class="text-xs font-black px-2 py-0.5 ${c.badge} text-white rounded">${d.code}</span>
          <span class="text-sm font-medium ${c.darkLabel}">${d.name}</span>
        </div>
        <span class="text-sm font-bold ${c.text}">${d.count}</span>
      </div>`;
  }
  container.innerHTML = html;
}

// ============================================================
// FOOTER
// ============================================================
function updateFooter(data) {
  const now = new Date();
  const time = now.toTimeString().split(" ")[0];
  document.getElementById("footerTime").textContent = `Last updated: ${time}`;
  document.getElementById("footerMachine").textContent = `Machine: ${data.machine}`;
  document.getElementById("footerTotal").textContent = `Total Pcs: ${data.totalPcs}`;
}

// ============================================================
// EXPORT CSV
// ============================================================
function exportCSV(data) {
  let csv = "Index,Row,Col,Status,DefectCode,DefectName\n";
  const posMap = {};
  for (const d of data.defects) {
    for (const p of d.positions) {
      posMap[p] = d;
    }
  }
  for (let i = 0; i < data.totalPcs; i++) {
    const row = Math.floor(i / 20) + 1;
    const col = (i % 20) + 1;
    const defect = posMap[i];
    if (defect) {
      csv += `${i},${row},${col},NG,${defect.code},${defect.name}\n`;
    } else {
      csv += `${i},${row},${col},OK,,\n`;
    }
  }
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `defect_report_${currentStage}_${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast(" Đã xuất file CSV thành công!");
}

// ============================================================
// TOAST NOTIFICATION
// ============================================================
function showToast(message) {
  // Remove existing
  const existing = document.querySelector(".toast-notify");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "toast-notify";
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

document.addEventListener("DOMContentLoaded", () => {

  const productInput = document.getElementById("productIdInput");
  const lotInput = document.getElementById("lotIdInput");
  const searchBtn = document.getElementById("searchBtn");

  const layerSelect = document.getElementById("layerSelect");
  const boardSelect = document.getElementById("boardSelect");
  const stageButtons = document.querySelectorAll(".stage-btn");

  searchBtn.addEventListener("click", () => {

    const productValue = productInput.value.trim();
    const lotValue = lotInput.value.trim();

    const record = database.find(item =>
      item.productId === productValue &&
      item.lotId === lotValue
    );

    if (!record) {
      showToast(" Không tìm thấy Product ID / Lot ID!");
      return;
    }


    layerSelect.value = record.layer;

    boardSelect.value = record.boardId;

    currentStage = record.stage;

    document.querySelectorAll("#stageSelector button").forEach(btn => {
      if (btn.textContent.trim() === record.stage) {
        btn.className = "px-4 py-1.5 rounded-lg text-sm font-semibold bg-primary text-white shadow-sm";
      } else {
        btn.className = "px-4 py-1.5 rounded-lg text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200";
      }
    });

    renderAll();
    showToast(" Đồng bộ thành công!");

  });

});