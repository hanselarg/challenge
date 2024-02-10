import React, { useState } from 'react';

interface CheckboxState {
  all: boolean;
  India: boolean;
  USA: boolean;
  France: boolean;
}

const App: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<CheckboxState>({ all: false, India: false, USA: false, France: false });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (name === "all") {
      setCheckedItems({
        all: checked,
        India: checked,
        USA: checked,
        France: checked,
      });
    } else {
      const newCheckedItems = { ...checkedItems, [name]: checked };

      const allChecked = Object.keys(newCheckedItems).every((key) => {
        return key === "all" || newCheckedItems[key as keyof CheckboxState];
      });

      setCheckedItems({ ...newCheckedItems, all: allChecked });
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="all"
          checked={checkedItems.all}
          onChange={handleChange}
        />
        Select all
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="India"
          checked={checkedItems.India}
          onChange={handleChange}
        />
        India
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="USA"
          checked={checkedItems.USA}
          onChange={handleChange}
        />
        USA
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="France"
          checked={checkedItems.France}
          onChange={handleChange}
        />
        France
      </label>
    </div>
  );
}

export default App;
