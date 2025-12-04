function CustomTooltip({
  active,
  payload,
  label,
  labelFormatter,
  valueFormatter,
}) {
  if (!active || !payload || !payload.length) return null;

  const rawValue = payload[0].value;
  const rawPayload = payload[0];

  const displayLabel = labelFormatter ? labelFormatter(label) : label;
  const displayValue = valueFormatter
    ? valueFormatter(rawValue, rawPayload)
    : rawValue;

  return (
    <div className="custom-tooltip">
      <div className="tooltip-label">{displayLabel}</div>
      <div className="tooltip-value">{displayValue}</div>
    </div>
  );
}

export default CustomTooltip;
