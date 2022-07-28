import { RenderHookResult } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import {
  absencePagination,
  absenceSelector,
} from "../../store/absences/absence.slice";
import { renderHookWithProviders } from "../../store/utils/test-utils";

import usePagination from "./usePagination";

describe("testing usePagination", () => {
  test("setPage will change the current page", () => {
    const { result }: RenderHookResult<any, any> = renderHookWithProviders(() =>
      usePagination(absenceSelector, absencePagination)
    );
    console.log(result);
    expect(result.current.page).toEqual(0);

    act(() => {
      result.current.setPage(2);
    });
    expect(result.current.page).toEqual(2);
  });

  test("setPageSize will change the page Size", () => {
    const { result }: RenderHookResult<any, any> = renderHookWithProviders(() =>
      usePagination(absenceSelector, absencePagination)
    );

    expect(result.current.pageSize).toEqual(10);

    act(() => {
      result.current.setPageSize(5);
    });
    expect(result.current.pageSize).toEqual(5);
  });
});
