'use client';

import React from 'react';

import { useEditorReadOnly } from '@udecode/plate/react';
import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
} from '@udecode/plate-basic-marks/react';
import { FontBackgroundColorPlugin, FontColorPlugin } from '@udecode/plate-font/react';
import { AudioPlugin, FilePlugin, ImagePlugin, VideoPlugin } from '@udecode/plate-media/react';
import {
  ArrowUpToLineIcon,
  BaselineIcon,
  BoldIcon,
  Code2Icon,
  ItalicIcon,
  PaintBucketIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from 'lucide-react';

import { MoreDropdownMenu } from '@/components/plate-ui/more-dropdown-menu';

import { AlignDropdownMenu } from './align-dropdown-menu';
import { ColorDropdownMenu } from './color-dropdown-menu';
import { EmojiDropdownMenu } from './emoji-dropdown-menu';
import { ExportToolbarButton } from './export-toolbar-button';
import { ImportToolbarButton } from './import-toolbar-button';
import {
  BulletedIndentListToolbarButton,
  NumberedIndentListToolbarButton,
} from './indent-list-toolbar-button';
import { IndentTodoToolbarButton } from './indent-todo-toolbar-button';
import { IndentToolbarButton } from './indent-toolbar-button';
import { InsertDropdownMenu } from './insert-dropdown-menu';
import { LineHeightDropdownMenu } from './line-height-dropdown-menu';
import { LinkToolbarButton } from './link-toolbar-button';
import { MarkToolbarButton } from './mark-toolbar-button';
import { MediaToolbarButton } from './media-toolbar-button';
import { ModeDropdownMenu } from './mode-dropdown-menu';
import { OutdentToolbarButton } from './outdent-toolbar-button';
import { TableDropdownMenu } from './table-dropdown-menu';
import { ToggleToolbarButton } from './toggle-toolbar-button';
import { ToolbarGroup } from './toolbar';
import { TurnIntoDropdownMenu } from './turn-into-dropdown-menu';

export function FixedToolbarButtons() {
  const readOnly = useEditorReadOnly();

  return (
    <div className="flex w-full items-center px-4">
      {!readOnly && (
        <>
          <div className="hidden lg:flex">
            <ToolbarGroup>
              <ExportToolbarButton>
                <ArrowUpToLineIcon />
              </ExportToolbarButton>

              <ImportToolbarButton />
            </ToolbarGroup>
          </div>

          <ToolbarGroup>
            <InsertDropdownMenu />
            <TurnIntoDropdownMenu />
          </ToolbarGroup>

          <div className="hidden flex-wrap lg:inline-flex">
            <div className="flex">
              <ToolbarGroup>
                <MarkToolbarButton nodeType={BoldPlugin.key} tooltip="Bold (⌘+B)">
                  <BoldIcon />
                </MarkToolbarButton>

                <MarkToolbarButton nodeType={ItalicPlugin.key} tooltip="Italic (⌘+I)">
                  <ItalicIcon />
                </MarkToolbarButton>

                <MarkToolbarButton nodeType={UnderlinePlugin.key} tooltip="Underline (⌘+U)">
                  <UnderlineIcon />
                </MarkToolbarButton>

                <MarkToolbarButton
                  nodeType={StrikethroughPlugin.key}
                  tooltip="Strikethrough (⌘+⇧+M)"
                >
                  <StrikethroughIcon />
                </MarkToolbarButton>

                <MarkToolbarButton nodeType={CodePlugin.key} tooltip="Code (⌘+E)">
                  <Code2Icon />
                </MarkToolbarButton>

                <ColorDropdownMenu nodeType={FontColorPlugin.key} tooltip="Text color">
                  <BaselineIcon />
                </ColorDropdownMenu>

                <ColorDropdownMenu
                  nodeType={FontBackgroundColorPlugin.key}
                  tooltip="Background color"
                >
                  <PaintBucketIcon />
                </ColorDropdownMenu>
              </ToolbarGroup>

              <ToolbarGroup>
                <AlignDropdownMenu />

                <NumberedIndentListToolbarButton />
                <BulletedIndentListToolbarButton />
                <IndentTodoToolbarButton />
                <ToggleToolbarButton />
              </ToolbarGroup>
            </div>
            <ToolbarGroup>
              <LineHeightDropdownMenu />
              <OutdentToolbarButton />
              <IndentToolbarButton />
            </ToolbarGroup>
            <div className="inline-flex">
              <ToolbarGroup>
                <LinkToolbarButton />
                <TableDropdownMenu />
                <EmojiDropdownMenu />
              </ToolbarGroup>
            </div>

            <ToolbarGroup>
              <MediaToolbarButton nodeType={ImagePlugin.key} />
              <MediaToolbarButton nodeType={VideoPlugin.key} />
              <MediaToolbarButton nodeType={AudioPlugin.key} />
              <MediaToolbarButton nodeType={FilePlugin.key} />
              <MoreDropdownMenu />
            </ToolbarGroup>
          </div>
        </>
      )}

      <div className="grow" />

      <ToolbarGroup>
        <ModeDropdownMenu />
      </ToolbarGroup>
    </div>
  );
}
