import { useState } from "react";

type Props = {
  checked: boolean;
}

function Checkbox({ checked }: Props) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <span>internal</span>
    </div>
  );
}

export default Checkbox;
