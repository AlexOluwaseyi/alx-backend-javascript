export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const response = mathFunction();
    queue.push(response);
  } catch (error) {
    queue.push(`${error.name}: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
