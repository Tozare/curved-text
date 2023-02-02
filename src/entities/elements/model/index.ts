import { createEffect, createEvent, createStore, sample } from 'effector';
import type { Element } from "../typings";

export const $element = createStore<Element>(DEFAULT_TEXT_ELEMENT);
export const elementChanged = createEvent<Element>();
export const elementInitialized = createEvent<Element>();

$element
  .on(elementChanged, (_, element) => element)
  .on(elementInitialized, (_, element) => element)

export const getElementFx = createEffect(async () => {
  // const fieldsRes = await fieldsApi.getFieldsList({});
  // return fieldsRes.data as Field[];
  const elementAsString = localStorage.getItem("text-element");
  const element = elementAsString ? JSON.parse(elementAsString) : DEFAULT_TEXT_ELEMENT;
  return element;
});

export const saveElementFx = createEffect(async (element: Element) => {
  localStorage.setItem("text-element", JSON.stringify(element));
});

sample({
  clock: getElementFx.doneData,
  target: elementInitialized,
});

sample({
  clock: elementChanged,
  target: saveElementFx,
});
