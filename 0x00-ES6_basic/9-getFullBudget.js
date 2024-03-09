// eslint-disable-next-line import/extensions
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  // eslint-disable-next-line no-unused-vars
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    // eslint-disable-next-line no-unused-vars
    getIncomeInDollars: (income) => `$${budget.income}`,
    // eslint-disable-next-line no-unused-vars
    getIncomeInEuros: (income) => `${budget.income} euros`,
  };

  return fullBudget;
}
