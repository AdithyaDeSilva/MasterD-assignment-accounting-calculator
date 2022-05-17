const form = document.getElementById('form');
const methods = document.getElementById('methods');
const cost = document.getElementById('cost');
const usefulLife = document.getElementById('usefulLife');
const scrapValue = document.getElementById('scrapValue');
const accDepreciation = document.getElementById('accDepreciation');
const scrap = document.getElementById('scrap');
const noOfUnits = document.getElementById('noOfUnits');
const productionPerYear = document.getElementById('productionPerYear');
const depreciation = document.getElementById('depreciation');
let selectedOption = 'Straight Line';

form.addEventListener('submit', (event) => {
	event.preventDefault();
	let depreciationValue;
	if (selectedOption === 'Straight Line') {
		const costValue = cost.value;
		const scrapValueValue = scrapValue.value;
		const usefulLifeValue = usefulLife.value;
		depreciationValue = (costValue - scrapValueValue) / usefulLifeValue;
	} else if (selectedOption === 'Reducing Balance') {
		const costValue = cost.value;
		const accDepreciationValue = accDepreciation.value;
		const usefulLifeValue = usefulLife.value;
		const scrapValue = scrap.value;
		depreciationValue =
			(costValue - accDepreciationValue)(1 - Math.sqrt(scrapValue / usefulLifeValue)) * 100;
	} else {
		const costValue = cost.value;
		const scrapValue = scrap.value;
		const noOfUnitsValue = noOfUnits.value;
		const productionPerYearValue = productionPerYear.value;
		depreciationValue = ((costValue - scrapValue) * productionPerYearValue) / noOfUnitsValue;
	}
	depreciation.value = depreciationValue;
});

methods.addEventListener('change', (event) => {
	selectedOption = event.target.value;
	if (selectedOption === 'Straight Line') {
		//
	} else if (selectedOption === 'Reducing Balance') {
		//
	} else {
		//
	}
});
