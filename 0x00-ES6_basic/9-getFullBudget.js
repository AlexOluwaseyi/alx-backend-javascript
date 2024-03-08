import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  getBudgetObject(income, gdp, capita);
  const fullBudget = {
    getIncomeInDollars() {
      return `$${income}`;
    },
    getIncomeInEuros() {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
