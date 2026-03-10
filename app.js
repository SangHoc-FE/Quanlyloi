
const MOCK_DB = {
  AOI: {
    "Layer 1 (TOP)": {
      "BRD-88210-01": {
        totalPcs: 400, machine: "AOI-05",
        defects: [
          { code: "E01", name: "Ngắn mạch", color: "red", positions: [12, 45, 78, 156] },
          { code: "W04", name: "Thiếu linh kiện", color: "orange", positions: [23, 67, 89, 134, 201, 345] },
          { code: "M12", name: "Đính hàn", color: "yellow", positions: [99, 250, 310] },
        ]
      },
      "BRD-88210-02": {
        totalPcs: 400, machine: "AOI-05",
        defects: [
          { code: "E01", name: "Ngắn mạch", color: "red", positions: [5, 200] },
          { code: "E03", name: "hở mạch", color: "red", positions: [150, 300, 355] },
          { code: "W04", name: "Thiếu linh kiện", color: "orange", positions: [30, 60] },
        ]
      },
      "BRD-88210-03": {
        totalPcs: 400, machine: "AOI-05",
        defects: [
          { code: "M12", name: "Đính hàn", color: "yellow", positions: [18, 72, 144, 288] },
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
          { code: "M12", name: "Đính hàn", color: "yellow", positions: [75, 300] },
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
          { code: "M12", name: "Đính hàn", color: "yellow", positions: [15, 30, 45, 60, 75] },
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
          { code: "V03", name: "Ổ vàng", color: "red", positions: [199, 350] },
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
          { code: "V03", name: "Ổ vàng", color: "red", positions: [180] },
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
          { code: "F02", name: "Bị khí", color: "yellow", positions: [55, 110, 165, 220, 275, 330, 385] },
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
const STAGE_FLOW = ["AOI", "AVI", "ETEST", "VISUAL 1", "VISUAL 2"];
const DEFAULT_LAYOUT_CONFIG = {
  pcsCols: 2,
  pcsRows: 5,
  sheetCols: 2,
  sheetRows: 2,
  poCount: 2,
  drawSource: "",
};
let currentStage = "AOI";
let currentTooltip = null;
let pickMode = false;
let currentScope = "PCS";
let pendingAction = null;
let pendingAutoPlan = null;
let layoutConfig = { ...DEFAULT_LAYOUT_CONFIG };
const selectedCells = new Set();
const manualXoutState = {};
const autoXoutState = {};
const overXoutState = {};
const auditLogs = [];

document.addEventListener("DOMContentLoaded", () => {
  initDefaults();
  bindEvents();
  renderAll();
  updateAutoPanel();
});

function initDefaults() {
  const layerSelect = document.getElementById("layerSelect");
  const boardSelect = document.getElementById("boardSelect");
  const firstLayer = Object.keys(MOCK_DB[currentStage] || {})[0];
  const firstBoard = firstLayer ? Object.keys(MOCK_DB[currentStage][firstLayer] || {})[0] : null;
  if (firstLayer) layerSelect.value = firstLayer;
  if (firstBoard) boardSelect.value = firstBoard;
  setLayoutInputs(layoutConfig);
}

function getLayoutFromInputs() {
  return sanitizeLayoutConfig({
    pcsCols: Number(document.getElementById("pcsColsInput").value),
    pcsRows: Number(document.getElementById("pcsRowsInput").value),
    sheetCols: Number(document.getElementById("sheetColsInput").value),
    sheetRows: Number(document.getElementById("sheetRowsInput").value),
    poCount: Number(document.getElementById("poCountInput").value),
    drawSource: document.getElementById("drawSourceInput").value.trim(),
  });
}

function sanitizeLayoutConfig(rawConfig) {
  return {
    pcsCols: Math.max(1, Number(rawConfig.pcsCols) || DEFAULT_LAYOUT_CONFIG.pcsCols),
    pcsRows: Math.max(1, Number(rawConfig.pcsRows) || DEFAULT_LAYOUT_CONFIG.pcsRows),
    sheetCols: Math.max(1, Number(rawConfig.sheetCols) || DEFAULT_LAYOUT_CONFIG.sheetCols),
    sheetRows: Math.max(1, Number(rawConfig.sheetRows) || DEFAULT_LAYOUT_CONFIG.sheetRows),
    poCount: Math.max(1, Number(rawConfig.poCount) || DEFAULT_LAYOUT_CONFIG.poCount),
    drawSource: rawConfig.drawSource || "",
  };
}

function setLayoutInputs(config) {
  document.getElementById("pcsColsInput").value = String(config.pcsCols);
  document.getElementById("pcsRowsInput").value = String(config.pcsRows);
  document.getElementById("sheetColsInput").value = String(config.sheetCols);
  document.getElementById("sheetRowsInput").value = String(config.sheetRows);
  document.getElementById("poCountInput").value = String(config.poCount);
  document.getElementById("drawSourceInput").value = config.drawSource;
}

function getCellsPerSheet() {
  return layoutConfig.pcsCols * layoutConfig.pcsRows;
}

function getDisplayPcsCols() {
  return layoutConfig.pcsRows;
}

function getDisplayPcsRows() {
  return layoutConfig.pcsCols;
}

function getConfiguredTotalPcs() {
  return getCellsPerSheet() * layoutConfig.sheetCols * layoutConfig.sheetRows;
}

function getActiveTotalPcs(data) {
  return Math.min(data.totalPcs, getConfiguredTotalPcs());
}

function getLayoutPositionFromIndex(index) {
  const totalRows = getDisplayPcsRows() * layoutConfig.sheetRows;
  const row = index % totalRows;
  const col = Math.floor(index / totalRows);

  return {
    row,
    col,
  };
}

function getIndexFromLayoutPosition(row, col) {
  const totalRows = getDisplayPcsRows() * layoutConfig.sheetRows;
  return (col * totalRows) + row;
}

function bindEvents() {
  const stageSelector = document.getElementById("stageSelector");
  stageSelector.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    currentStage = btn.dataset.stage;
    updateStageButtonState();
    ensureLayerBoardIsValid();
    clearSelection();
    renderAll();
    updateAutoPanel();
  });

  document.getElementById("layerSelect").addEventListener("change", () => {
    ensureLayerBoardIsValid();
    clearSelection();
    renderAll();
    updateAutoPanel();
  });

  document.getElementById("boardSelect").addEventListener("change", () => {
    clearSelection();
    renderAll();
    updateAutoPanel();
  });

  document.getElementById("scopeSelect").addEventListener("change", (e) => {
    currentScope = e.target.value;
    clearSelection();
    renderAll();
  });

  document.getElementById("pickPcsBtn").addEventListener("click", () => {
    pickMode = !pickMode;
    document.getElementById("pickPcsBtn").classList.toggle("active", pickMode);
    renderAll();
  });

  document.getElementById("xoutPcsBtn").addEventListener("click", () => openManualXoutConfirm("PCS"));
  document.getElementById("xoutSheetBtn").addEventListener("click", () => openManualXoutConfirm("SHEET"));
  document.getElementById("xoutBoardBtn").addEventListener("click", () => openManualXoutConfirm("BOARD"));
  document.getElementById("clearSelectionBtn").addEventListener("click", () => {
    clearSelection();
    renderAll();
  });

  document.getElementById("previousOverlayToggle").addEventListener("change", () => renderAll());
  document.getElementById("searchBtn").addEventListener("click", runSearch);
  document.getElementById("saveLayoutBtn").addEventListener("click", applyLayoutConfig);
  ["pcsColsInput", "pcsRowsInput", "sheetColsInput", "sheetRowsInput", "poCountInput"].forEach((id) => {
    document.getElementById(id).addEventListener("input", applyLayoutConfig);
  });
  document.getElementById("drawSourceInput").addEventListener("change", applyLayoutConfig);

  document.getElementById("exportPdfBtn").addEventListener("click", () => {
    const data = getCurrentData();
    if (!data) return;
    showToast("Dang xuat bao cao PDF...");
    setTimeout(() => showToast("Da xuat bao cao PDF thanh cong!"), 1200);
  });

  document.getElementById("exportCsvBtn").addEventListener("click", () => {
    const data = getCurrentData();
    if (!data) return;
    exportCSV(data);
  });

  document.getElementById("openHistoryBtn").addEventListener("click", openHistory);
  document.getElementById("closeHistoryBtn").addEventListener("click", closeHistory);
  ["historyUserFilter", "historyActionFilter", "historyStageFilter", "historyLotFilter", "historyFromFilter", "historyToFilter"].forEach((id) => {
    document.getElementById(id).addEventListener("input", renderHistory);
  });

  document.getElementById("closeConfirmModalBtn").addEventListener("click", closeConfirmModal);
  document.getElementById("cancelConfirmBtn").addEventListener("click", closeConfirmModal);
  document.getElementById("applyConfirmBtn").addEventListener("click", executePendingConfirm);

  document.getElementById("previewAutoXoutBtn").addEventListener("click", previewAutoXout);
  document.getElementById("runAutoXoutBtn").addEventListener("click", previewAutoXout);
  document.getElementById("closeAutoPreviewBtn").addEventListener("click", closeAutoPreview);
  document.getElementById("cancelAutoPreviewBtn").addEventListener("click", closeAutoPreview);
  document.getElementById("confirmAutoPreviewBtn").addEventListener("click", applyAutoXout);

  document.getElementById("deleteByScopeBtn").addEventListener("click", () => openDeleteConfirm("SCOPE"));
  document.getElementById("deleteLotBtn").addEventListener("click", () => openDeleteConfirm("LOT"));

  document.addEventListener("click", (e) => {
    if (currentTooltip && !e.target.closest(".defect-cell") && !e.target.closest(".cell-tooltip")) {
      removeTooltip();
    }
  });
}

function ensureLayerBoardIsValid() {
  const layerSelect = document.getElementById("layerSelect");
  const boardSelect = document.getElementById("boardSelect");
  const stageData = MOCK_DB[currentStage] || {};

  if (!stageData[layerSelect.value]) {
    const fallbackLayer = Object.keys(stageData)[0];
    if (fallbackLayer) layerSelect.value = fallbackLayer;
  }

  const boardData = stageData[layerSelect.value] || {};
  if (!boardData[boardSelect.value]) {
    const fallbackBoard = Object.keys(boardData)[0];
    if (fallbackBoard) boardSelect.value = fallbackBoard;
  }
}

function applyLayoutConfig() {
  layoutConfig = getLayoutFromInputs();
  setLayoutInputs(layoutConfig);
  clearSelection();
  renderAll();
  updateAutoPanel();
}

function updateStageButtonState() {
  document.querySelectorAll("#stageSelector button").forEach((btn) => {
    if (btn.dataset.stage === currentStage) {
      btn.className = "px-4 py-1.5 rounded-lg text-sm font-semibold bg-primary text-white shadow-sm";
    } else {
      btn.className = "px-4 py-1.5 rounded-lg text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200";
    }
  });
}

function getCurrentContext() {
  return {
    stage: currentStage,
    layer: document.getElementById("layerSelect").value,
    board: document.getElementById("boardSelect").value,
    lot: document.getElementById("lotIdInput").value.trim() || "N/A",
    user: document.getElementById("activeUserLabel").textContent.trim(),
  };
}

function getContextKey(stage, layer, board) {
  return `${stage}|${layer}|${board}`;
}

function getCurrentKey() {
  const ctx = getCurrentContext();
  return getContextKey(ctx.stage, ctx.layer, ctx.board);
}

function getStateSet(store, key) {
  if (!store[key]) store[key] = new Set();
  return store[key];
}

function getCurrentData() {
  const { layer, board } = getCurrentContext();
  const stageData = MOCK_DB[currentStage];
  if (!stageData || !stageData[layer] || !stageData[layer][board]) return null;
  return stageData[layer][board];
}

function getPreviousStage() {
  const idx = STAGE_FLOW.indexOf(currentStage);
  if (idx <= 0) return null;
  return STAGE_FLOW[idx - 1];
}

function getSheetIndex(pcsIndex) {
  const pos = getLayoutPositionFromIndex(pcsIndex);
  const sheetRow = Math.floor(pos.row / getDisplayPcsRows());
  const sheetCol = Math.floor(pos.col / getDisplayPcsCols());
  return (sheetRow * layoutConfig.sheetCols) + sheetCol;
}

function getSheetIndices(sheetIndex, totalPcs) {
  const result = [];
  const sheetRow = Math.floor(sheetIndex / layoutConfig.sheetCols);
  const sheetCol = sheetIndex % layoutConfig.sheetCols;

  for (let localCol = 0; localCol < getDisplayPcsCols(); localCol++) {
    for (let localRow = 0; localRow < getDisplayPcsRows(); localRow++) {
      const row = (sheetRow * getDisplayPcsRows()) + localRow;
      const col = (sheetCol * getDisplayPcsCols()) + localCol;
      const idx = getIndexFromLayoutPosition(row, col);
      if (idx < totalPcs) result.push(idx);
    }
  }
  return result;
}

function getDefectMap(data) {
  const posMap = {};
  for (const d of data.defects) {
    for (const p of d.positions) posMap[p] = d;
  }
  return posMap;
}

function getPreviousDefectMap() {
  const prevStage = getPreviousStage();
  if (!prevStage) return {};
  const { layer, board } = getCurrentContext();
  const prevData = MOCK_DB[prevStage] && MOCK_DB[prevStage][layer] && MOCK_DB[prevStage][layer][board];
  if (!prevData) return {};
  return getDefectMap(prevData);
}

function clearSelection() {
  selectedCells.clear();
}

function getSelectedSheets() {
  return new Set(Array.from(selectedCells).map(getSheetIndex));
}

function getTargetIndicesByLevel(level) {
  const data = getCurrentData();
  if (!data) return [];
  const activeTotalPcs = getActiveTotalPcs(data);

  if (level === "PCS") return Array.from(selectedCells);

  if (level === "SHEET") {
    const sheets = getSelectedSheets();
    const result = [];
    for (const sheet of sheets) result.push(...getSheetIndices(sheet, activeTotalPcs));
    return result;
  }

  if (level === "BOARD") {
    const result = [];
    for (let i = 0; i < activeTotalPcs; i++) result.push(i);
    return result;
  }

  return [];
}

function getNewlyAffectedIndices(indices, key) {
  const manualSet = getStateSet(manualXoutState, key);
  const autoSet = getStateSet(autoXoutState, key);
  return indices.filter((idx) => !manualSet.has(idx) && !autoSet.has(idx));
}

function renderAll() {
  const data = getCurrentData();
  if (!data) return;
  renderGrid(data);
  renderLegend(data);
  renderDefectCodes(data);
  updateFooter(data);
  renderSelectionSummary(data);
}

function renderSelectionSummary(data) {
  const summaryEl = document.getElementById("selectionSummary");
  const selectedCount = selectedCells.size;
  const sheets = new Set(Array.from(selectedCells).map(getSheetIndex));
  const activeTotalPcs = getActiveTotalPcs(data);
  summaryEl.textContent = `Scope=${currentScope} | PCS=${selectedCount} | Sheet=${sheets.size} | Board=${getCurrentContext().board} | Total=${activeTotalPcs} | PO=${layoutConfig.poCount}`;
}

function renderGrid(data) {
  const grid = document.getElementById("gridMapping");
  grid.innerHTML = "";

  const activeTotalPcs = getActiveTotalPcs(data);
  const cellsPerSheet = getCellsPerSheet();
  const totalSheets = Math.ceil(activeTotalPcs / cellsPerSheet);
  const key = getCurrentKey();
  const defectMap = getDefectMap(data);
  const prevDefects = getPreviousDefectMap();
  const showPrevOverlay = document.getElementById("previousOverlayToggle").checked;
  grid.style.setProperty("--sheet-cols", String(layoutConfig.sheetCols));

  const manualSet = getStateSet(manualXoutState, key);
  const autoSet = getStateSet(autoXoutState, key);
  const overSet = getStateSet(overXoutState, key);
  const selectedSheets = getSelectedSheets();

  for (let sheetRow = 0; sheetRow < layoutConfig.sheetRows; sheetRow++) {
    for (let sheetCol = 0; sheetCol < layoutConfig.sheetCols; sheetCol++) {
      const sheetIndex = (sheetRow * layoutConfig.sheetCols) + sheetCol;
      if (sheetIndex >= totalSheets) continue;

      const sheetWrap = document.createElement("div");
      sheetWrap.className = "mapping-sheet";

      const sheetGrid = document.createElement("div");
      sheetGrid.className = "mapping-sheet-grid";
      sheetGrid.style.gridTemplateColumns = `repeat(${getDisplayPcsCols()}, minmax(0, 1fr))`;

      for (let pcsRow = 0; pcsRow < getDisplayPcsRows(); pcsRow++) {
        for (let pcsCol = 0; pcsCol < getDisplayPcsCols(); pcsCol++) {
          const row = (sheetRow * getDisplayPcsRows()) + pcsRow;
          const col = (sheetCol * getDisplayPcsCols()) + pcsCol;
          const i = getIndexFromLayoutPosition(row, col);
          if (i >= activeTotalPcs) continue;

          const defect = defectMap[i];
          const prevDefect = prevDefects[i];
          const cell = document.createElement("div");

          let statusClass = "bg-emerald-500/20 dark:bg-emerald-500/10 border border-emerald-500/30";
          let textClass = "text-slate-700";

          if (defect) {
            const c = COLOR_MAP[defect.color] || COLOR_MAP.yellow;
            statusClass = c.cell;
            textClass = "text-white";
          }

          cell.className = `defect-cell flex items-center justify-center cursor-pointer ${statusClass}`;
          cell.dataset.index = String(i);

          if (pickMode) cell.classList.add("selectable");
          if (selectedCells.has(i)) cell.classList.add("selected-cell");
          if (currentScope === "SHEET" && selectedSheets.has(getSheetIndex(i))) cell.classList.add("sheet-highlight");
          if (currentScope === "BOARD" && selectedCells.size > 0) cell.classList.add("board-highlight");
          if (manualSet.has(i)) cell.classList.add("xout-manual", "cell-disabled");
          if (autoSet.has(i)) cell.classList.add("xout-auto", "cell-disabled");
          if (overSet.has(i)) cell.classList.add("xout-over");

          if (showPrevOverlay && !defect && prevDefect) {
            cell.classList.add("prev-overlay");
          }

          cell.innerHTML = `<span class="${textClass}">${String(i + 1).padStart(2, "0")}</span>`;
          cell.addEventListener("click", (e) => {
            e.stopPropagation();
            handleCellInteraction(i, defect, prevDefect, activeTotalPcs);
          });

          sheetGrid.appendChild(cell);
        }
      }

      sheetWrap.appendChild(sheetGrid);
      grid.appendChild(sheetWrap);
    }
  }
}

function handleCellInteraction(index, defect, prevDefect, totalPcs) {
  if (pickMode) {
    const key = getCurrentKey();
    const manualSet = getStateSet(manualXoutState, key);
    const autoSet = getStateSet(autoXoutState, key);

    if (!manualSet.has(index) && !autoSet.has(index)) {
      if (currentScope === "PCS") {
        if (selectedCells.has(index)) selectedCells.delete(index);
        else selectedCells.add(index);
      } else if (currentScope === "SHEET") {
        const sheetIndex = getSheetIndex(index);
        const sheetPcs = getSheetIndices(sheetIndex, totalPcs);
        const fullySelected = sheetPcs.every((i) => selectedCells.has(i));
        sheetPcs.forEach((i) => {
          if (fullySelected) selectedCells.delete(i);
          else selectedCells.add(i);
        });
      } else {
        if (selectedCells.size === totalPcs) selectedCells.clear();
        else {
          selectedCells.clear();
          for (let i = 0; i < totalPcs; i++) selectedCells.add(i);
        }
      }
      renderAll();
    }
  }

  removeTooltip();
  const pos = getLayoutPositionFromIndex(index);
  const row = pos.row + 1;
  const col = pos.col + 1;
  let info = `<b>Vi tri:</b> Hang ${row}, Cot ${col}<br><b>Index:</b> ${index}`;
  if (defect) info += `<br><b>Defect:</b> ${defect.code} - ${defect.name}`;
  else info += `<br><b>Defect:</b> OK`;

  if (document.getElementById("previousOverlayToggle").checked && !defect && prevDefect) {
    info += `<br><b>Overlay:</b> ${prevDefect.code} (${getPreviousStage()})`;
  }

  const key = getCurrentKey();
  const manualSet = getStateSet(manualXoutState, key);
  const autoSet = getStateSet(autoXoutState, key);
  const overSet = getStateSet(overXoutState, key);

  if (manualSet.has(index)) info += `<br><b>X-OUT:</b> Manual`;
  if (autoSet.has(index)) info += `<br><b>X-OUT:</b> Auto`;
  if (overSet.has(index)) info += `<br><b>Status:</b> Qua X-OUT`;

  const anchor = document.querySelector(`.defect-cell[data-index="${index}"]`);
  if (anchor) showCellTooltip(anchor, info);
}

function openManualXoutConfirm(level) {
  const key = getCurrentKey();
  const targets = getTargetIndicesByLevel(level);
  const affected = getNewlyAffectedIndices(targets, key);

  if (affected.length === 0) {
    showToast("Khong co PCS hop le de X-OUT.");
    return;
  }

  openConfirmModal({
    actionType: "Manual X-OUT",
    impactLevel: level,
    affected,
    requireReason: true,
    execute: ({ reason, note }) => {
      const manualSet = getStateSet(manualXoutState, key);
      const autoSet = getStateSet(autoXoutState, key);
      const overSet = getStateSet(overXoutState, key);
      affected.forEach((idx) => {
        manualSet.add(idx);
        autoSet.delete(idx);
        overSet.delete(idx);
      });
      addAuditLog("MANUAL_XOUT", `${level}:${affected.length} PCS`, reason, note);
      clearSelection();
      renderAll();
      showToast("Da ap dung Manual X-OUT thanh cong.");
    },
  });
}

function getNearestStageWithDefects() {
  const { layer, board } = getCurrentContext();
  for (let i = STAGE_FLOW.indexOf(currentStage); i >= 0; i--) {
    const stage = STAGE_FLOW[i];
    const item = MOCK_DB[stage] && MOCK_DB[stage][layer] && MOCK_DB[stage][layer][board];
    if (!item) continue;
    if (item.defects.some((d) => d.positions.length > 0)) return stage;
  }
  return null;
}

function buildAutoPlan() {
  const threshold = Math.max(1, Number(document.getElementById("autoThresholdInput").value || 1));
  const sourceStage = getNearestStageWithDefects();
  const { layer } = getCurrentContext();

  if (!sourceStage) return { threshold, sourceStage: null, affectedSheets: 0, byBoard: {} };

  const stageLayerData = (MOCK_DB[sourceStage] && MOCK_DB[sourceStage][layer]) || {};
  const byBoard = {};
  let affectedSheets = 0;

  Object.keys(stageLayerData).forEach((board) => {
    const data = stageLayerData[board];
    const defectMap = getDefectMap(data);
    const boardPlan = { sheets: [], overSheets: [] };
    const activeTotalPcs = getActiveTotalPcs(data);
    const cellsPerSheet = getCellsPerSheet();

    for (let sheet = 0; sheet < Math.ceil(activeTotalPcs / cellsPerSheet); sheet++) {
      const cells = getSheetIndices(sheet, activeTotalPcs);
      const count = cells.reduce((sum, idx) => sum + (defectMap[idx] ? 1 : 0), 0);
      if (count >= threshold) {
        boardPlan.sheets.push({ sheet, count });
        affectedSheets += 1;
      }
      if (count >= threshold * 1.7) boardPlan.overSheets.push(sheet);
    }

    byBoard[board] = boardPlan;
  });

  return { threshold, sourceStage, affectedSheets, byBoard };
}

function updateAutoPanel() {
  const plan = buildAutoPlan();
  document.getElementById("autoSourceStage").textContent = plan.sourceStage || "N/A";
  document.getElementById("autoAffectedCount").textContent = String(plan.affectedSheets);

  const currentBoard = getCurrentContext().board;
  const boardPlan = plan.byBoard[currentBoard] || { sheets: [], overSheets: [] };
  if (!plan.sourceStage) {
    document.getElementById("autoPreviewSummary").textContent = "không tìm thấy source stage co defect.";
    return;
  }
  if (boardPlan.sheets.length === 0) {
    document.getElementById("autoPreviewSummary").textContent = `Source ${plan.sourceStage}: board hiện tại không vượt threshold ${plan.threshold}.`;
    return;
  }
  const sheetList = boardPlan.sheets.map((s) => `Sheet ${s.sheet + 1} (${s.count})`).join(", ");
  document.getElementById("autoPreviewSummary").textContent = `Source ${plan.sourceStage}: ${sheetList}`;
}

function previewAutoXout() {
  pendingAutoPlan = buildAutoPlan();
  if (!pendingAutoPlan.sourceStage) {
    showToast("Khong co du lieu de Auto X-OUT.");
    return;
  }

  const lines = [];
  Object.entries(pendingAutoPlan.byBoard).forEach(([board, plan]) => {
    if (plan.sheets.length === 0) return;
    const text = plan.sheets.map((s) => `Sheet ${s.sheet + 1}: ${s.count} defect`).join(" | ");
    const overText = plan.overSheets.length ? ` | Qua X-OUT: ${plan.overSheets.map((v) => v + 1).join(", ")}` : "";
    lines.push(`<div class="p-2 rounded border border-slate-200 dark:border-slate-700 mb-2"><b>${board}</b><br>${text}${overText}</div>`);
  });

  document.getElementById("autoPreviewContent").innerHTML = lines.length ? lines.join("") : "Khong co board nao vuot threshold.";
  document.getElementById("autoPreviewModal").classList.remove("hidden");
}

function closeAutoPreview() {
  document.getElementById("autoPreviewModal").classList.add("hidden");
}

function applyAutoXout() {
  if (!pendingAutoPlan || !pendingAutoPlan.sourceStage) {
    closeAutoPreview();
    return;
  }

  const { layer } = getCurrentContext();
  let totalApplied = 0;

  Object.entries(pendingAutoPlan.byBoard).forEach(([board, plan]) => {
    if (!plan.sheets.length) return;
    const data = MOCK_DB[currentStage] && MOCK_DB[currentStage][layer] && MOCK_DB[currentStage][layer][board];
    if (!data) return;

    const key = getContextKey(currentStage, layer, board);
    const autoSet = getStateSet(autoXoutState, key);
    const overSet = getStateSet(overXoutState, key);

    plan.sheets.forEach((sheetInfo) => {
      getSheetIndices(sheetInfo.sheet, getActiveTotalPcs(data)).forEach((idx) => {
        autoSet.add(idx);
        totalApplied += 1;
      });
    });

    plan.overSheets.forEach((sheetIdx) => {
      getSheetIndices(sheetIdx, getActiveTotalPcs(data)).forEach((idx) => overSet.add(idx));
    });
  });

  addAuditLog("AUTO_XOUT", `Sheets=${pendingAutoPlan.affectedSheets}`, `Threshold=${pendingAutoPlan.threshold}`, `Source=${pendingAutoPlan.sourceStage}`);
  closeAutoPreview();
  renderAll();
  updateAutoPanel();
  showToast(`Đã áp dụng Auto X-OUT (${totalApplied} PCS).`);
}

function openDeleteConfirm(mode) {
  const data = getCurrentData();
  if (!data) return;

  if (mode === "LOT") {
    const lot = document.getElementById("lotIdInput").value.trim();
    if (!lot) {
      showToast("Cần nhập LOT ID trước khi xóa LOT.");
      return;
    }

    const targets = database.filter((item) => item.lotId === lot);
    if (!targets.length) {
      showToast("không tìm thấy lot để xóa.");
      return;
    }

    openConfirmModal({
      actionType: "Delete Data",
      impactLevel: "LOT",
      affected: targets,
      requireReason: true,
      strongToken: "DELETE LOT",
      execute: ({ reason, note }) => {
        targets.forEach((item) => {
          const stageData = MOCK_DB[item.stage] && MOCK_DB[item.stage][item.layer] && MOCK_DB[item.stage][item.layer][item.boardId];
          if (stageData) stageData.defects = [];
          const key = getContextKey(item.stage, item.layer, item.boardId);
          delete manualXoutState[key];
          delete autoXoutState[key];
          delete overXoutState[key];
        });
        addAuditLog("DELETE_LOT", lot, reason, note);
        clearSelection();
        renderAll();
        showToast(`đã xóa dữ liệu lot ${lot}.`);
      },
    });
    return;
  }

  const targets = getTargetIndicesByLevel(currentScope === "LOT" ? "BOARD" : currentScope);
  if (!targets.length) {
    showToast("không có dữ liệu được chọn để xóa.");
    return;
  }

  openConfirmModal({
    actionType: "Delete Data",
    impactLevel: currentScope,
    affected: targets,
    requireReason: true,
    execute: ({ reason, note }) => {
      applyDeleteTargets(targets);
      addAuditLog("DELETE_SCOPE", `${currentScope}:${targets.length} PCS`, reason, note);
      clearSelection();
      renderAll();
      showToast("đã xóa dữ liệu theo scope.");
    },
  });
}

function applyDeleteTargets(targets) {
  const data = getCurrentData();
  if (!data) return;
  const targetSet = new Set(targets);

  data.defects = data.defects
    .map((d) => ({ ...d, positions: d.positions.filter((p) => !targetSet.has(p)) }))
    .filter((d) => d.positions.length > 0);

  const key = getCurrentKey();
  const manualSet = getStateSet(manualXoutState, key);
  const autoSet = getStateSet(autoXoutState, key);
  const overSet = getStateSet(overXoutState, key);

  targets.forEach((idx) => {
    manualSet.delete(idx);
    autoSet.delete(idx);
    overSet.delete(idx);
  });
}

function openConfirmModal(config) {
  pendingAction = config;
  document.getElementById("confirmActionType").value = config.actionType;
  document.getElementById("confirmImpactLevel").value = config.impactLevel;
  document.getElementById("confirmAffectedCount").value = Array.isArray(config.affected) ? config.affected.length : 0;
  document.getElementById("confirmReason").value = "";
  document.getElementById("confirmNote").value = "";

  const warning = document.getElementById("confirmWarning");
  warning.classList.toggle("hidden", (Array.isArray(config.affected) ? config.affected.length : 0) < 150);

  document.getElementById("confirmModal").classList.remove("hidden");
}

function closeConfirmModal() {
  pendingAction = null;
  document.getElementById("confirmModal").classList.add("hidden");
}

function executePendingConfirm() {
  if (!pendingAction) return;

  const reason = document.getElementById("confirmReason").value.trim();
  const note = document.getElementById("confirmNote").value.trim();

  if (pendingAction.requireReason && !reason) {
    showToast("vui lòng nhập mã lỗi hoặc lý do xác nhận.");
    return;
  }

  if (pendingAction.strongToken && reason !== pendingAction.strongToken) {
    showToast(`Vui lòng nhập đúng '${pendingAction.strongToken}' để xác nhận.`);
    return;
  }

  pendingAction.execute({ reason, note });
  closeConfirmModal();
}

function renderLegend(data) {
  const container = document.getElementById("legendContainer");
  const key = getCurrentKey();
  const manualSet = getStateSet(manualXoutState, key);
  const autoSet = getStateSet(autoXoutState, key);
  const overSet = getStateSet(overXoutState, key);
  const showPrev = document.getElementById("previousOverlayToggle").checked;
  const activeTotalPcs = getActiveTotalPcs(data);

  const counts = { red: 0, orange: 0, yellow: 0 };
  data.defects.forEach((d) => {
    const visibleCount = d.positions.filter((p) => p < activeTotalPcs).length;
    counts[d.color] = (counts[d.color] || 0) + visibleCount;
  });

  const totalDefects = counts.red + counts.orange + counts.yellow;
  const okCount = activeTotalPcs - totalDefects;

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <div class="legend-group space-y-2">
        <div class="text-xs font-bold uppercase tracking-wide text-slate-500">Mức độ nghiêm trọng của lỗi</div>
        <div class="legend-row"><span class="legend-dot bg-emerald-500/20 border-emerald-500/30"></span>Bình thường / OK (${okCount})</div>
        <div class="legend-row"><span class="legend-dot bg-red-500"></span>Nghiêm trọng (${counts.red})</div>
        <div class="legend-row"><span class="legend-dot bg-orange-500"></span>Cảnh báo (${counts.orange})</div>
        <div class="legend-row"><span class="legend-dot bg-yellow-400"></span> Nhẹ (${counts.yellow})</div>
      </div>
      <div class="legend-group space-y-2">
        <div class="text-xs font-bold uppercase tracking-wide text-slate-500">X-OUT Trạng thái quy trình</div>
        <div class="legend-row"><span class="legend-dot" style="background: repeating-linear-gradient(45deg, rgba(148,163,184,.8) 0px, rgba(148,163,184,.8) 4px, transparent 4px, transparent 8px);"></span>Manual X-OUT (${manualSet.size})</div>
        <div class="legend-row"><span class="legend-dot" style="border:2px solid #0ea5e9;"></span>Auto X-OUT (${autoSet.size})</div>
        <div class="legend-row"><span class="legend-dot" style="border:2px solid #ef4444;"></span>Qua X-OUT (${overSet.size})</div>
        <div class="legend-row"><span class="legend-dot" style="border:1px dashed #0ea5e9;"></span>Previous-stage overlay (${showPrev ? "ON" : "OFF"})</div>
      </div>
    </div>`;
}

function renderDefectCodes(data) {
  const container = document.getElementById("defectCodesContainer");
  const activeTotalPcs = getActiveTotalPcs(data);
  if (data.defects.length === 0) {
    container.innerHTML = `<p class="text-sm text-slate-400 dark:text-slate-500 text-center py-4">Khong co loi nao duoc phat hien.</p>`;
    return;
  }

  const grouped = {};
  for (const d of data.defects) {
    const visibleCount = d.positions.filter((p) => p < activeTotalPcs).length;
    if (visibleCount === 0) continue;
    if (!grouped[d.code]) grouped[d.code] = { ...d, count: visibleCount };
    else grouped[d.code].count += visibleCount;
  }

  if (Object.keys(grouped).length === 0) {
    container.innerHTML = `<p class="text-sm text-slate-400 dark:text-slate-500 text-center py-4">Khong co loi nao duoc phat hien.</p>`;
    return;
  }

  let html = "";
  Object.keys(grouped).forEach((code) => {
    const d = grouped[code];
    const c = COLOR_MAP[d.color] || COLOR_MAP.yellow;
    html += `
      <div class="flex items-center justify-between p-2 rounded-lg ${c.bg} border ${c.border}">
        <div class="flex items-center gap-3">
          <span class="text-xs font-black px-2 py-0.5 ${c.badge} text-white rounded">${d.code}</span>
          <span class="text-sm font-medium ${c.darkLabel}">${d.name}</span>
        </div>
        <span class="text-sm font-bold ${c.text}">${d.count}</span>
      </div>`;
  });

  container.innerHTML = html;
}

function updateFooter(data) {
  const now = new Date();
  const time = now.toTimeString().split(" ")[0];
  document.getElementById("footerTime").textContent = `Cập nhật lần cuối: ${time}`;
  document.getElementById("footerMachine").textContent = `Loại máy: ${data.machine}`;
  document.getElementById("footerTotal").textContent = `Tổng số: ${getActiveTotalPcs(data)}`;
}

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

function showToast(message) {
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

function addAuditLog(action, target, reason, note) {
  const ctx = getCurrentContext();
  auditLogs.unshift({
    user: ctx.user,
    timestamp: new Date().toISOString(),
    action,
    target,
    note,
    reason,
    stage: ctx.stage,
    board: ctx.board,
    lot: ctx.lot,
  });
  renderHistory();
}

function openHistory() {
  document.getElementById("historyDrawer").classList.add("open");
  renderHistory();
}

function closeHistory() {
  document.getElementById("historyDrawer").classList.remove("open");
}

function renderHistory() {
  const userFilter = document.getElementById("historyUserFilter").value.trim().toLowerCase();
  const actionFilter = document.getElementById("historyActionFilter").value.trim().toLowerCase();
  const stageFilter = document.getElementById("historyStageFilter").value.trim().toLowerCase();
  const lotFilter = document.getElementById("historyLotFilter").value.trim().toLowerCase();
  const from = document.getElementById("historyFromFilter").value;
  const to = document.getElementById("historyToFilter").value;

  const list = auditLogs.filter((log) => {
    if (userFilter && !log.user.toLowerCase().includes(userFilter)) return false;
    if (actionFilter && !log.action.toLowerCase().includes(actionFilter)) return false;
    if (stageFilter && !log.stage.toLowerCase().includes(stageFilter)) return false;
    if (lotFilter && !log.lot.toLowerCase().includes(lotFilter)) return false;
    if (from && new Date(log.timestamp) < new Date(from)) return false;
    if (to && new Date(log.timestamp) > new Date(to)) return false;
    return true;
  });

  const container = document.getElementById("historyList");
  if (!list.length) {
    container.innerHTML = `<div class="text-sm text-slate-500">Chưa có lịch sử thao tác.</div>`;
    return;
  }

  container.innerHTML = list.map((log) => {
    const time = new Date(log.timestamp).toLocaleString();
    return `
      <div class="p-3 rounded-lg border border-slate-200 dark:border-slate-700">
        <div class="text-sm font-semibold">${log.action} - ${log.target}</div>
        <div class="text-xs text-slate-500 mt-1">${time} | ${log.user} | Stage=${log.stage} | Board=${log.board} | Lot=${log.lot}</div>
        <div class="text-xs text-slate-600 dark:text-slate-300 mt-1">Reason: ${log.reason || "-"} | Note: ${log.note || "-"}</div>
      </div>`;
  }).join("");
}

function runSearch() {
  const productId = document.getElementById("productIdInput").value.trim();
  const lotId = document.getElementById("lotIdInput").value.trim();

  const record = database.find((item) => item.productId === productId && item.lotId === lotId);
  if (!record) {
    showToast("Không tìm thấy Product ID / Lot ID.");
    return;
  }

  currentStage = record.stage;
  document.getElementById("layerSelect").value = record.layer;
  document.getElementById("boardSelect").value = record.boardId;
  updateStageButtonState();
  clearSelection();
  renderAll();
  updateAutoPanel();
  showToast("Đồng bộ thành công!");
}

function exportCSV(data) {
  let csv = "Index,Row,Col,Status,DefectCode,DefectName,XoutState\n";
  const defectMap = getDefectMap(data);
  const key = getCurrentKey();
  const manualSet = getStateSet(manualXoutState, key);
  const autoSet = getStateSet(autoXoutState, key);
  const overSet = getStateSet(overXoutState, key);
  const activeTotalPcs = getActiveTotalPcs(data);

  for (let i = 0; i < activeTotalPcs; i++) {
    const pos = getLayoutPositionFromIndex(i);
    const row = pos.row + 1;
    const col = pos.col + 1;
    const defect = defectMap[i];

    let xState = "";
    if (manualSet.has(i)) xState = "MANUAL";
    else if (overSet.has(i)) xState = "OVER";
    else if (autoSet.has(i)) xState = "AUTO";

    if (defect) csv += `${i},${row},${col},NG,${defect.code},${defect.name},${xState}\n`;
    else csv += `${i},${row},${col},OK,,,${xState}\n`;
  }

  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `defect_report_${currentStage}_${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Đã xuất file CSV thành công!");

}