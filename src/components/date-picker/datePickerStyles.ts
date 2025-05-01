import { css } from 'styled-components';

const BORDER_RADIUS = '80px';
const HEADER_BUTTON_POSITION = '-12px';
const ONE_CELL_IN_VIEW_SELECTOR = '1 of .ant-picker-cell-in-view';

export const datePickerDropdownStyles = css`
  .ant-picker-dropdown-range .ant-picker-panel-container {
    border: 1px solid red;
    .ant-picker-panel-layout {
      .ant-picker-presets ul {
        padding: 6px 0;
        li {
          border-radius: 0;
          padding-block: 0;
        }
      }
      .ant-picker-panels {
        .ant-picker-panel {
          padding: 12px 0;
          .ant-picker-header {
            margin-bottom: 6px;
            border: none;
            .ant-picker-header-view {
              .ant-picker-year-btn {
                margin-left: 4px;
              }
            }
            button {
              font-size: 16px;
              position: relative;
              &.ant-picker-header-prev-btn {
                left: ${HEADER_BUTTON_POSITION};
              }
              &.ant-picker-header-next-btn {
                right: ${HEADER_BUTTON_POSITION};
              }
            }
          }
          .ant-picker-body {
            thead th {
              font-weight: 500;
              color: grey
            tbody tr {
              :last-child {
                display: none;
              }
              > td {
                &:first-child,
                &:nth-child(${ONE_CELL_IN_VIEW_SELECTOR}) {
                  &::before {
                    border-radius: ${BORDER_RADIUS} 0 0 ${BORDER_RADIUS};
                  }
                }
                &:last-child,
                &:nth-last-child(${ONE_CELL_IN_VIEW_SELECTOR}) {
                  &::before {
                    border-radius: 0 ${BORDER_RADIUS} ${BORDER_RADIUS} 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
