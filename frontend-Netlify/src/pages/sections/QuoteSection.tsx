import { useQuoteWizard } from "../../hooks/useQuoteWizard";
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

interface DoorType {
  id: string;
  labelKey: string;
  icon: string;
  descKey: string;
}

const lDoorTypes: DoorType[] = [
  {
    id: "corredera",
    labelKey: "quote.doorTypes.sliding",
    icon: "↔️",
    descKey: "quote.doorTypes.sliding",
  },
  {
    id: "seccional",
    labelKey: "quote.doorTypes.sectional",
    icon: "⬆️",
    descKey: "quote.doorTypes.sectional",
  },
  {
    id: "abatible",
    labelKey: "quote.doorTypes.swing",
    icon: "🚪",
    descKey: "quote.doorTypes.swing",
  },
];

const lColors = [
  { name: "Blanco", hex: "#f0f0f0" },
  { name: "Gris", hex: "#808080" },
  { name: "Negro", hex: "#2a2a2a" },
  { name: "Marrón", hex: "#8B4513" },
  { name: "Verde", hex: "#2d5a27" },
  { name: "Rojo", hex: "#8B0000" },
  { name: "Azul", hex: "#1a3a6b" },
  { name: "Personalizado", hex: "" },
];

export function QuoteSection() {
  const { t } = useTranslation();
  const { 
    vStep,
    cSetStep,
    vDoorType,
    cSetDoorType,
    vWidth,
    cSetWidth,
    vHeight,
    cSetHeight,
    vColor,
    cSetColor,
    cSubmit,
    cReset,
    vEstimatedPrice,
    vIsWidthValid,
    vIsHeightValid,
    vMeasuresValid,
  } = useQuoteWizard();

  // Estados locales para inputs no controlados durante edición
  const [vWidthInput, setVWidthInput] = useState<string>('');
  const [vHeightInput, setVHeightInput] = useState<string>('');
  const [vCustomColor, setVCustomColor] = useState<string>('#ff0000');
  const [vShowCustomColor, setVShowCustomColor] = useState(false);
  const [vQuoteSent, setVQuoteSent] = useState(false);
  const vSelectedDoor = lDoorTypes.find((vDoor) => vDoor.id === vDoorType);

  // Sincronizar inputs con estado del hook
  useEffect(() => {
    setVWidthInput(vWidth !== null ? vWidth.toFixed(2) : '');
  }, [vWidth]);

  useEffect(() => {
    setVHeightInput(vHeight !== null ? vHeight.toFixed(2) : '');
  }, [vHeight]);

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setVWidthInput(val);
    const num = parseFloat(val);
    setVQuoteSent(false);
    cSetWidth(isNaN(num) ? null : num);
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setVHeightInput(val);
    const num = parseFloat(val);
    setVQuoteSent(false);
    cSetHeight(isNaN(num) ? null : num);
  };

  const handleColorSelect = (name: string) => {
    setVQuoteSent(false);
    cSetColor(name);
    if (name === 'Personalizado') {
      setVShowCustomColor(true);
    } else {
      setVShowCustomColor(false);
    }
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVCustomColor(e.target.value);
    setVQuoteSent(false);
    cSetColor(e.target.value);
  };

  const cHandleSubmit = () => {
    const vSubmitted = cSubmit();
    if (vSubmitted) {
      setVQuoteSent(true);
    }
  };

  const cHandleReset = () => {
    cReset();
    setVQuoteSent(false);
    setVShowCustomColor(false);
    setVWidthInput('');
    setVHeightInput('');
    setVCustomColor('#ff0000');
  };

  return (
    <section
      id="presupuesto"
      className="process"
      style={{ background: "var(--color-bg-dark)" }}
    >
      <div className="section-header">
        <h2>
          {t("quote.title")}
        </h2>
        <p>
          {t("quote.subtitle")}
        </p>
      </div>

      <div
        style={{
          maxWidth: 700,
          margin: "0 auto",
          background: "var(--color-bg-medium)",
          borderRadius: 12,
          padding: "2rem",
          border: "1px solid rgba(184, 115, 51, 0.1)",
        }}
      >
        {/* Barra de progreso */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "2rem",
          }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "0.85rem",
                background:
                  vStep >= i ? "var(--grad-bronze)" : "rgba(255,255,255,0.1)",
                color: vStep >= i ? "#fff" : "var(--color-text-muted)",
                transition: "all 0.3s ease",
              }}
            >
              {i}
            </div>
          ))}
        </div>

        {/* Paso 1: Tipo de puerta */}
        {vStep === 1 && (
          <div>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "1.5rem",
                color: "var(--color-text-dim)",
              }}
            >
              {t("quote.step1")}
            </h3>
            <div
              className="quote-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
              }}
            >
              {lDoorTypes.map((vDoor) => (
                <button
                  key={vDoor.id}
                  onClick={() => {
                    setVQuoteSent(false);
                    cSetDoorType(vDoor.id);
                    cSetStep(2);
                  }}
                  style={{
                    padding: "1.5rem 1rem",
                    borderRadius: 12,
                    cursor: "pointer",
                    background:
                      vDoorType === vDoor.id
                        ? "var(--grad-bronze)"
                        : "var(--color-bg-dark)",
                    border:
                      vDoorType === vDoor.id
                        ? "none"
                        : "1px solid rgba(184, 115, 51, 0.2)",
                    color: "#fff",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (vDoorType !== vDoor.id)
                      e.currentTarget.style.borderColor = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    if (vDoorType !== vDoor.id)
                      e.currentTarget.style.borderColor =
                        "rgba(184, 115, 51, 0.2)";
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                    {vDoor.icon}
                  </div>
                  <div style={{ fontWeight: 700, marginBottom: "0.3rem" }}>
                    {t(vDoor.labelKey)}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-text-dim)",
                    }}
                  >
                    {t(vDoor.descKey)}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Paso 2: Medidas */}
        {vStep === 2 && (
          <div>
            <h3
              id="step2-title"
              style={{
                textAlign: "center",
                marginBottom: "1.5rem",
                color: "var(--color-text-dim)",
              }}
            >
              {t("quote.step2")}
            </h3>
            
            {/* Precio estimado visible */}
            {vEstimatedPrice && (
              <div
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  marginBottom: "1.5rem",
                  background: "rgba(184, 115, 51, 0.15)",
                  borderRadius: 8,
                  border: "1px solid rgba(184, 115, 51, 0.3)",
                }}
              >
                <span style={{ fontSize: "0.9rem", color: "var(--color-text-dim)" }}>
                  {t("quote.estimatedPrice")}
                </span>
                <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--color-accent)", marginLeft: "0.5rem" }}>
                  ~{vEstimatedPrice.toLocaleString()} €
                </span>
              </div>
            )}

            <div
              className="quote-measures"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                maxWidth: 400,
                margin: "0 auto",
              }}
            >
              <div>
                <label
                  htmlFor="width-input"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "var(--color-text-dim)",
                    fontSize: "0.9rem",
                  }}
                >
                  {t("quote.width")}
                </label>
                <input
                  id="width-input"
                  type="number"
                  step="0.01"
                  min="0.5"
                  max="10"
                  value={vWidthInput}
                  onChange={handleWidthChange}
                  placeholder="2.50"
                  aria-label="Ancho en metros"
                  aria-describedby={!vIsWidthValid && vWidthInput ? 'width-error' : undefined}
                  aria-invalid={!vIsWidthValid && vWidthInput !== ''}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: 8,
                    border: !vIsWidthValid && vWidthInput !== '' 
                      ? "2px solid #e74c3c" 
                      : "1px solid rgba(184, 115, 51, 0.2)",
                    background: "var(--color-bg-dark)",
                    color: "#fff",
                    fontSize: "1.1rem",
                    textAlign: "center",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                />
                {!vIsWidthValid && vWidthInput !== '' && (
                  <p id="width-error" role="alert" style={{ color: '#e74c3c', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                    Valor entre 0.5 y 10 metros
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="height-input"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "var(--color-text-dim)",
                    fontSize: "0.9rem",
                  }}
                >
                  {t("quote.height")}
                </label>
                <input
                  id="height-input"
                  type="number"
                  step="0.01"
                  min="0.5"
                  max="10"
                  value={vHeightInput}
                  onChange={handleHeightChange}
                  placeholder="2.20"
                  aria-label={t("quote.height")}
                  aria-describedby={!vIsHeightValid && vHeightInput ? 'height-error' : undefined}
                  aria-invalid={!vIsHeightValid && vHeightInput !== ''}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: 8,
                    border: !vIsHeightValid && vHeightInput !== '' 
                      ? "2px solid #e74c3c" 
                      : "1px solid rgba(184, 115, 51, 0.2)",
                    background: "var(--color-bg-dark)",
                    color: "#fff",
                    fontSize: "1.1rem",
                    textAlign: "center",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                />
                {!vIsHeightValid && vHeightInput !== '' && (
                  <p id="height-error" role="alert" style={{ color: '#e74c3c', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                    Valor entre 0.5 y 10 metros
                  </p>
                )}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                marginTop: "1.5rem",
              }}
            >
              <button
                onClick={() => cSetStep(1)}
                className="btn-secondary"
                style={{ padding: "0.6rem 1.5rem" }}
              >
                {t("quote.back")}
              </button>
              <button
                onClick={() => vMeasuresValid && cSetStep(3)}
                className="btn-primary"
                disabled={!vMeasuresValid}
                aria-disabled={!vMeasuresValid}
                style={{
                  padding: "0.6rem 1.5rem",
                  opacity: vMeasuresValid ? 1 : 0.5,
                  cursor: vMeasuresValid ? "pointer" : "not-allowed",
                }}
              >
                {t("quote.continue")}
              </button>
            </div>
          </div>
        )}

        {/* Paso 3: Color */}
        {vStep === 3 && (
          <div>
            <h3
              id="step3-title"
              style={{
                textAlign: "center",
                marginBottom: "1.5rem",
                color: "var(--color-text-dim)",
              }}
            >
              {t("quote.step3")}
            </h3>
            
            {/* Precio estimado también en paso 3 */}
            {vEstimatedPrice && (
              <div
                style={{
                  textAlign: "center",
                  padding: "0.75rem",
                  marginBottom: "1rem",
                  background: "rgba(184, 115, 51, 0.1)",
                  borderRadius: 8,
                  fontSize: "0.9rem",
                }}
              >
                {t("quote.estimatedPrice")} <strong>~{vEstimatedPrice.toLocaleString()} €</strong>
              </div>
            )}

            {!vQuoteSent ? (
              <>
                <div
                  role="radiogroup"
                  aria-labelledby="step3-title"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.75rem",
                    flexWrap: "wrap",
                    marginBottom: "1.5rem",
                  }}
                >
                  {lColors.map((vC) => (
                    <button
                      key={vC.name}
                      role="radio"
                      aria-checked={vColor === vC.name || (vC.name === 'Personalizado' && vShowCustomColor)}
                      onClick={() => handleColorSelect(vC.name)}
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        cursor: "pointer",
                        background:
                          vC.hex || "linear-gradient(45deg, #f0f0f0, #333)",
                        border:
                          (vColor === vC.name || (vC.name === 'Personalizado' && vShowCustomColor))
                            ? "3px solid var(--color-accent)"
                            : "3px solid transparent",
                        outline:
                          (vColor === vC.name || (vC.name === 'Personalizado' && vShowCustomColor))
                            ? "2px solid var(--color-accent)"
                            : "none",
                        transition: "all 0.2s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.6rem",
                        color: vC.hex === "#f0f0f0" ? "#333" : "#fff",
                      }}
                      title={vC.name}
                      onFocus={(e) => { e.currentTarget.style.outline = '2px solid var(--color-accent)'; e.currentTarget.style.outlineOffset = '2px'; }}
                      onBlur={(e) => { e.currentTarget.style.outline = 'none'; }}
                    >
                      {vC.name === "Personalizado" ? "?" : ""}
                    </button>
                  ))}
                </div>

                {/* Color personalizado */}
                {vShowCustomColor && (
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <label htmlFor="custom-color" style={{ alignSelf: 'center', fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>
                      Tu color:
                    </label>
                    <input
                      id="custom-color"
                      type="color"
                      value={vCustomColor}
                      onChange={handleCustomColorChange}
                      style={{ width: 48, height: 48, borderRadius: '50%', border: 'none', cursor: 'pointer' }}
                      aria-label="Selector de color personalizado"
                    />
                  </div>
                )}

                <p
                  id="color-status"
                  style={{
                    textAlign: "center",
                    color: "var(--color-text-dim)",
                    fontSize: "0.85rem",
                    marginBottom: "1.5rem",
                  }}
                  aria-live="polite"
                >
                  {vColor
                    ? `Color seleccionado: ${vColor}`
                    : "Toca un color para seleccionarlo"}
                </p>
                <div
                  style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
                >
                  <button
                    onClick={() => cSetStep(2)}
                    className="btn-secondary"
                    style={{ padding: "0.6rem 1.5rem" }}
                  >
                    {t("quote.back")}
                  </button>
                  <button
                    onClick={cHandleSubmit}
                    className="btn-whatsapp"
                    style={{ padding: "0.75rem 2rem", fontSize: "1rem" }}
                  >
                    {t("quote.requestQuote")}
                  </button>
                </div>
              </>
            ) : (
              <div
                style={{
                  maxWidth: 520,
                  margin: "0 auto",
                  padding: "1.25rem",
                  background: "rgba(37, 211, 102, 0.12)",
                  border: "1px solid rgba(37, 211, 102, 0.3)",
                  borderRadius: 12,
                  textAlign: "center",
                }}
              >
                <p style={{ margin: 0, fontWeight: 700, color: "#d7ffe6" }}>
                  {t("quote.successMsg")}
                </p>
                <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap", marginTop: "1rem" }}>
                  <button
                    onClick={cHandleReset}
                    className="btn-secondary"
                    style={{ padding: "0.6rem 1.25rem" }}
                  >
                    {t("quote.reset")}
                  </button>
                  <button
                    onClick={() => {
                      setVQuoteSent(false);
                      cSetStep(2);
                    }}
                    className="btn-primary"
                    style={{ padding: "0.6rem 1.25rem" }}
                  >
                    {t("quote.adjustMeasures")}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
