import { renderHook, act } from "@testing-library/react";
import { usePagination } from "./usePagination";

describe("usePagination hook", () => {
  const items = ["A", "B", "C", "D", "E", "F"]; // 6 items

  it("should initialize with correct values and first page items", () => {
    const { result } = renderHook(() =>
      usePagination({ items, itemsPerPage: 3 }),
    );

    expect(result.current.currentPage).toBe(1);
    expect(result.current.totalPages).toBe(2);
    expect(result.current.paginatedItems).toEqual(["A", "B", "C"]);
  });

  it("should move to next page with correct items", () => {
    const { result } = renderHook(() =>
      usePagination({ items, itemsPerPage: 3 }),
    );

    act(() => {
      result.current.goToNextPage();
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.paginatedItems).toEqual(["D", "E", "F"]);
  });

  it("should move back to previous page with correct items", () => {
    const { result } = renderHook(() =>
      usePagination({ items, itemsPerPage: 3 }),
    );

    act(() => {
      result.current.goToNextPage();
    });

    act(() => {
      result.current.goToPreviousPage();
    });

    expect(result.current.currentPage).toBe(1);
    expect(result.current.paginatedItems).toEqual(["A", "B", "C"]);
  });
});
