import { createEffect, createEvent, createStore, sample } from 'effector';
import type { Element } from "../typings";
import { DEFAULT_TEXT_ELEMENT } from "../config";

export const $element = createStore<Element>(DEFAULT_TEXT_ELEMENT);
export const elementChanged = createEvent<Element>();
export const elementInitialized = createEvent<Element>();

$element
  .on(elementChanged, (_, element) => element)
  .on(elementInitialized, (_, element) => element)