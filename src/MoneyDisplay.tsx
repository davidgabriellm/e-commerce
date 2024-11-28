import './MoneyDisplayStyle.css'

interface MoneyProps {
  value: number;
}

const MoneyDisplay: React.FC<MoneyProps> = ({ value }) => {

  const [reais, centavos] = value.toFixed(2).split('.');

  return (
    <div className="money-display">
      <span className="money-symbol">R$</span>
      <span className="money-value">{reais}</span>
      <span className="money-cents">{centavos}</span>
    </div>
  );
};

export default MoneyDisplay;