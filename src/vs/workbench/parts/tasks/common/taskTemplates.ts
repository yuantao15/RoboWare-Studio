/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as nls from 'vs/nls';

import { IPickOpenEntry } from 'vs/platform/quickOpen/common/quickOpen';

export interface TaskEntry extends IPickOpenEntry {
	sort?: string;
	autoDetect: boolean;
	content: string;
}
/*
const gulp: TaskEntry = {
	id: 'gulp',
	label: 'Gulp',
	autoDetect: true,
	content: [
		'{',
		'\t// See https://go.microsoft.com/fwlink/?LinkId=733558',
		'\t// for the documentation about the tasks.json format',
		'\t"version": "0.1.0",',
		'\t"command": "gulp",',
		'\t"isShellCommand": true,',
		'\t"args": ["--no-color"],',
		'\t"showOutput": "always"',
		'}'
	].join('\n')
};

const grunt: TaskEntry = {
	id: 'grunt',
	label: 'Grunt',
	autoDetect: true,
	content: [
		'{',
		'\t// See https://go.microsoft.com/fwlink/?LinkId=733558',
		'\t// for the documentation about the tasks.json format',
		'\t"version": "0.1.0",',
		'\t"command": "grunt",',
		'\t"isShellCommand": true,',
		'\t"args": ["--no-color"],',
		'\t"showOutput": "always"',
		'}'
	].join('\n')
};

const npm: TaskEntry = {
	id: 'npm',
	label: 'npm',
	sort: 'NPM',
	autoDetect: false,
	content: [
		'{',
		'\t// See https://go.microsoft.com/fwlink/?LinkId=733558',
		'\t// for the documentation about the tasks.json format',
		'\t"version": "0.1.0",',
		'\t"command": "npm",',
		'\t"isShellCommand": true,',
		'\t"showOutput": "always",',
		'\t"suppressTaskName": true,',
		'\t"tasks": [',
		'\t\t{',
		'\t\t\t"taskName": "install",',
		'\t\t\t"args": ["install"]',
		'\t\t},',
		'\t\t{',
		'\t\t\t"taskName": "update",',
		'\t\t\t"args": ["update"]',
		'\t\t},',
		'\t\t{',
		'\t\t\t"taskName": "test",',
		'\t\t\t"args": ["run", "test"]',
		'\t\t}',
		'\t]',
		'}'
	].join('\n')
};

const tscConfig: TaskEntry = {
	id: 'tsc.config',
	label: 'TypeScript - tsconfig.json',
	autoDetect: false,
	description: nls.localize('tsc.config', 'Compiles a TypeScript project'),
	content: [
		'{',
		'\t// See https://go.microsoft.com/fwlink/?LinkId=733558',
		'\t// for the documentation about the tasks.json format',
		'\t"version": "0.1.0",',
		'\t"command": "tsc",',
		'\t"isShellCommand": true,',
		'\t"args": ["-p", "."],',
		'\t"showOutput": "silent",',
		'\t"problemMatcher": "$tsc"',
		'}'
	].join('\n')
};

const tscWatch: TaskEntry = {
	id: 'tsc.watch',
	label: 'TypeScript - Watch Mode',
	autoDetect: false,
	description: nls.localize('tsc.watch', 'Compiles a TypeScript project in watch mode'),
	content: [
		'{',
		'\t// See https://go.microsoft.com/fwlink/?LinkId=733558',
		'\t// for the documentation about the tasks.json format',
		'\t"version": "0.1.0",',
		'\t"command": "tsc",',
		'\t"isShellCommand": true,',
		'\t"args": ["-w", "-p", "."],',
		'\t"showOutput": "silent",',
		'\t"isBackground": true,',
		'\t"problemMatcher": "$tsc-watch"',
		'}'
	].join('\n')
};

const dotnetBuild: TaskEntry = {
	id: 'dotnetCore',
	label: '.NET Core',
	sort: 'NET Core',
	autoDetect: false,
	description: nls.localize('dotnetCore', 'Executes .NET Core build command'),
	content: [
		'{',
		'\t// See https://go.microsoft.com/fwlink/?LinkId=733558',
		'\t// for the documentation about the tasks.json format',
		'\t"version": "0.1.0",',
		'\t"command": "dotnet",',
		'\t"isShellCommand": true,',
		'\t"args": [],',
		'\t"tasks": [',
		'\t\t{',
		'\t\t\t"taskName": "build",',
		'\t\t\t"args": [ ],',
		'\t\t\t"isBuildCommand": true,',
		'\t\t\t"showOutput": "silent",',
		'\t\t\t"problemMatcher": "$msCompile"',
		'\t\t}',
		'\t]',
		'}'
	].join('\n')
};

const msbuild: TaskEntry = {
	id: 'msbuild',
	label: 'MSBuild',
	autoDetect: false,
	description: nls.localize('msbuild', 'Executes the build target'),
	content: [
		'{',
		'\t// See https://go.microsoft.com/fwlink/?LinkId=733558',
		'\t// for the documentation about the tasks.json format',
		'\t"version": "0.1.0",',
		'\t"command": "msbuild",',
		'\t"args": [',
		'\t\t// Ask msbuild to generate full paths for file names.',
		'\t\t"/property:GenerateFullPaths=true"',
		'\t],',
		'\t"taskSelector": "/t:",',
		'\t"showOutput": "silent",',
		'\t"tasks": [',
		'\t\t{',
		'\t\t\t"taskName": "build",',
		'\t\t\t// Show the output window only if unrecognized errors occur.',
		'\t\t\t"showOutput": "silent",',
		'\t\t\t// Use the standard MS compiler pattern to detect errors, warnings and infos',
		'\t\t\t"problemMatcher": "$msCompile"',
		'\t\t}',
		'\t]',
		'}'
	].join('\n')
};

const command: TaskEntry = {
	id: 'externalCommand',
	label: 'Others',
	autoDetect: false,
	description: nls.localize('externalCommand', 'Example to run an arbitrary external command'),
	content: [
		'{',
		'\t// See https://go.microsoft.com/fwlink/?LinkId=733558',
		'\t// for the documentation about the tasks.json format',
		'\t"version": "0.1.0",',
		'\t"command": "echo",',
		'\t"isShellCommand": true,',
		'\t"args": ["Hello World"],',
		'\t"showOutput": "always"',
		'}'
	].join('\n')
};

const maven: TaskEntry = {
	id: 'maven',
	label: 'maven',
	sort: 'MVN',
	autoDetect: false,
	description: nls.localize('Maven', 'Executes common maven commands'),
	content: [
		'{',
		'\t// See https://go.microsoft.com/fwlink/?LinkId=733558',
		'\t// for the documentation about the tasks.json format',
		'\t"version": "0.1.0",',
		'\t"command": "mvn",',
		'\t"isShellCommand": true,',
		'\t"showOutput": "always",',
		'\t"suppressTaskName": true,',
		'\t"tasks": [',
		'\t\t{',
		'\t\t\t"taskName": "verify",',
		'\t\t\t"args": ["-B", "verify"],',
		'\t\t\t"isBuildCommand": true',
		'\t\t},',
		'\t\t{',
		'\t\t\t"taskName": "test",',
		'\t\t\t"args": ["-B", "test"],',
		'\t\t\t"isTestCommand": true',
		'\t\t}',
		'\t]',
		'}'
	].join('\n')
};
*/
const rosBuild: TaskEntry = {
	id: 'ros',
	label: 'ROS Build',
	sort: 'ros',
	autoDetect: false,
	description: nls.localize('rosBuild', 'ROS building commands'),
	content: [
		'{',
		'\t"version": "0.1.0",',
		'\t"command": "bash",',
		'\t"args": [',
		'\t\t"-c"',
		'\t],',
		'\t"isShellCommand": true,',
		'\t"showOutput": "always",',
		'\t"suppressTaskName": true,',
		'\t"tasks": [',
		'\t\t{',
		'\t\t\t"taskName": "Debug",',
		'\t\t\t"args": [',
		'\t\t\t\t"catkin_make -C ${workspaceRoot} -DCMAKE_BUILD_TYPE=Debug"',
		'\t\t\t],',
		'\t\t\t"problemMatcher": [',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cpp",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": {',
		'\t\t\t\t\t\t"regexp": "^(.*):(\\\\d+):(\\\\d+):\\\\s+(warning|error):\\\\s+(.*)$",',
		'\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t"column": 3,',
		'\t\t\t\t\t\t"severity": 4,',
		'\t\t\t\t\t\t"message": 5',
		'\t\t\t\t\t}',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\w.*):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+)",',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^\\\\s+(\\\\w.*):(\\\\d+)\\\\s+(.+)$",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t\t"message": 3',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t}',
		'\t\t\t]',
		'\t\t},',
		'\t\t{',
		'\t\t\t"taskName": "Release",',
		'\t\t\t"args": [',
		'\t\t\t\t"catkin_make -C ${workspaceRoot}"',
		'\t\t\t],',
		'\t\t\t"problemMatcher": [',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cpp",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": {',
		'\t\t\t\t\t\t"regexp": "^(.*):(\\\\d+):(\\\\d+):\\\\s+(warning|error):\\\\s+(.*)$",',
		'\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t"column": 3,',
		'\t\t\t\t\t\t"severity": 4,',
		'\t\t\t\t\t\t"message": 5',
		'\t\t\t\t\t}',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\w.*):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+)",',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^\\\\s+(\\\\w.*):(\\\\d+)\\\\s+(.+)$",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t\t"message": 3',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t}',
		'\t\t\t]',
		'\t\t},',
		'\t\t{',
		'\t\t\t"taskName": "Debug (isolated)",',
		'\t\t\t"args": [',
		'\t\t\t\t"catkin_make_isolated -C ${workspaceRoot} -DCMAKE_BUILD_TYPE=Debug"',
		'\t\t\t],',
		'\t\t\t"problemMatcher": [',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cpp",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": {',
		'\t\t\t\t\t\t"regexp": "^(.*):(\\\\d+):(\\\\d+):\\\\s+(warning|error):\\\\s+(.*)$",',
		'\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t"column": 3,',
		'\t\t\t\t\t\t"severity": 4,',
		'\t\t\t\t\t\t"message": 5',
		'\t\t\t\t\t}',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\w.*):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+)",',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^\\\\s+(\\\\w.*):(\\\\d+)\\\\s+(.+)$",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t\t"message": 3',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t}',
		'\t\t\t]',
		'\t\t},',
		'\t\t{',
		'\t\t\t"taskName": "Release (isolated)",',
		'\t\t\t"args": [',
		'\t\t\t\t"catkin_make_isolated -C ${workspaceRoot}"',
		'\t\t\t],',
		'\t\t\t"problemMatcher": [',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cpp",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": {',
		'\t\t\t\t\t\t"regexp": "^(.*):(\\\\d+):(\\\\d+):\\\\s+(warning|error):\\\\s+(.*)$",',
		'\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t"column": 3,',
		'\t\t\t\t\t\t"severity": 4,',
		'\t\t\t\t\t\t"message": 5',
		'\t\t\t\t\t}',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\w.*):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+)",',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^\\\\s+(\\\\w.*):(\\\\d+)\\\\s+(.+)$",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t\t"message": 3',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t}',
		'\t\t\t]',
		'\t\t},',
		'\t\t{',
		'\t\t\t"taskName": "Debug (remote)",',
		'\t\t\t"args": [',
		'\t\t\t\t"echo \\"Remote Arguments not configured!\\""',
		'\t\t\t],',
		'\t\t\t"problemMatcher": [',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cpp",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": {',
		'\t\t\t\t\t\t"regexp": "^(.*):(\\\\d+):(\\\\d+):\\\\s+(warning|error):\\\\s+(.*)$",',
		'\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t"column": 3,',
		'\t\t\t\t\t\t"severity": 4,',
		'\t\t\t\t\t\t"message": 5',
		'\t\t\t\t\t}',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\w.*):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+)",',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^\\\\s+(\\\\w.*):(\\\\d+)\\\\s+(.+)$",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t\t"message": 3',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t}',
		'\t\t\t]',
		'\t\t},',
		'\t\t{',
		'\t\t\t"taskName": "Release (remote)",',
		'\t\t\t"args": [',
		'\t\t\t\t"echo \\"Remote Arguments not configured!\\""',
		'\t\t\t],',
		'\t\t\t"problemMatcher": [',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cpp",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": {',
		'\t\t\t\t\t\t"regexp": "^(.*):(\\\\d+):(\\\\d+):\\\\s+(warning|error):\\\\s+(.*)$",',
		'\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t"column": 3,',
		'\t\t\t\t\t\t"severity": 4,',
		'\t\t\t\t\t\t"message": 5',
		'\t\t\t\t\t}',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\w.*):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+)",',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^\\\\s+(\\\\w.*):(\\\\d+)\\\\s+(.+)$",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t\t"message": 3',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t}',
		'\t\t\t]',
		'\t\t},',
		'\t\t{',
		'\t\t\t"taskName": "Debug (remote isolated)",',
		'\t\t\t"args": [',
		'\t\t\t\t"echo \\"Remote Arguments not configured!\\""',
		'\t\t\t],',
		'\t\t\t"problemMatcher": [',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cpp",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": {',
		'\t\t\t\t\t\t"regexp": "^(.*):(\\\\d+):(\\\\d+):\\\\s+(warning|error):\\\\s+(.*)$",',
		'\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t"column": 3,',
		'\t\t\t\t\t\t"severity": 4,',
		'\t\t\t\t\t\t"message": 5',
		'\t\t\t\t\t}',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\w.*):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+)",',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^\\\\s+(\\\\w.*):(\\\\d+)\\\\s+(.+)$",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t\t"message": 3',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t}',
		'\t\t\t]',
		'\t\t},',
		'\t\t{',
		'\t\t\t"taskName": "Release (remote isolated)",',
		'\t\t\t"args": [',
		'\t\t\t\t"echo \\"Remote Arguments not configured!\\""',
		'\t\t\t],',
		'\t\t\t"problemMatcher": [',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cpp",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": {',
		'\t\t\t\t\t\t"regexp": "^(.*):(\\\\d+):(\\\\d+):\\\\s+(warning|error):\\\\s+(.*)$",',
		'\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t"column": 3,',
		'\t\t\t\t\t\t"severity": 4,',
		'\t\t\t\t\t\t"message": 5',
		'\t\t\t\t\t}',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\w.*):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+)",',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^\\\\s+(\\\\w.*):(\\\\d+)\\\\s+(.+)$",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t\t"message": 3',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t}',
		'\t\t\t]',
		'\t\t},',
		'\t\t{',
		'\t\t\t"taskName": "Debug (catkin)",',
		'\t\t\t"args": [',
		'\t\t\t\t"catkin build -w ${workspaceRoot} -DCMAKE_BUILD_TYPE=Debug"',
		'\t\t\t],',
		'\t\t\t"problemMatcher": [',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cpp",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": {',
		'\t\t\t\t\t\t"regexp": "^(.*):(\\\\d+):(\\\\d+):\\\\s+(warning|error):\\\\s+(.*)$",',
		'\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t"column": 3,',
		'\t\t\t\t\t\t"severity": 4,',
		'\t\t\t\t\t\t"message": 5',
		'\t\t\t\t\t}',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\w.*):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+)",',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^\\\\s+(\\\\w.*):(\\\\d+)\\\\s+(.+)$",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t\t"message": 3',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t}',
		'\t\t\t]',
		'\t\t},',
		'\t\t{',
		'\t\t\t"taskName": "Release (catkin)",',
		'\t\t\t"args": [',
		'\t\t\t\t"catkin build -w ${workspaceRoot}"',
		'\t\t\t],',
		'\t\t\t"problemMatcher": [',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cpp",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": {',
		'\t\t\t\t\t\t"regexp": "^(.*):(\\\\d+):(\\\\d+):\\\\s+(warning|error):\\\\s+(.*)$",',
		'\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t"column": 3,',
		'\t\t\t\t\t\t"severity": 4,',
		'\t\t\t\t\t\t"message": 5',
		'\t\t\t\t\t}',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\w.*):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+)",',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^\\\\s+(\\\\w.*):(\\\\d+)\\\\s+(.+)$",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t\t"message": 3',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t}',
		'\t\t\t]',
		'\t\t},',
		'\t\t{',
		'\t\t\t"taskName": "Debug (remote catkin)",',
		'\t\t\t"args": [',
		'\t\t\t\t"echo \\"Remote Arguments not configured!\\""',
		'\t\t\t],',
		'\t\t\t"problemMatcher": [',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cpp",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": {',
		'\t\t\t\t\t\t"regexp": "^(.*):(\\\\d+):(\\\\d+):\\\\s+(warning|error):\\\\s+(.*)$",',
		'\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t"column": 3,',
		'\t\t\t\t\t\t"severity": 4,',
		'\t\t\t\t\t\t"message": 5',
		'\t\t\t\t\t}',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\w.*):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+)",',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^\\\\s+(\\\\w.*):(\\\\d+)\\\\s+(.+)$",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t\t"message": 3',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t}',
		'\t\t\t]',
		'\t\t},',
		'\t\t{',
		'\t\t\t"taskName": "Release (remote catkin)",',
		'\t\t\t"args": [',
		'\t\t\t\t"echo \\"Remote Arguments not configured!\\""',
		'\t\t\t],',
		'\t\t\t"problemMatcher": [',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cpp",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": {',
		'\t\t\t\t\t\t"regexp": "^(.*):(\\\\d+):(\\\\d+):\\\\s+(warning|error):\\\\s+(.*)$",',
		'\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t"column": 3,',
		'\t\t\t\t\t\t"severity": 4,',
		'\t\t\t\t\t\t"message": 5',
		'\t\t\t\t\t}',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\w.*):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+).*at\\\\s+(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 2,',
		'\t\t\t\t\t\t\t"line": 3,',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"absolute"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^CMake\\\\s+(\\\\w+)",',
		'\t\t\t\t\t\t\t"severity": 1',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(\\\\/.+):(\\\\d+)",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2',
		'\t\t\t\t\t\t},',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^(.+)$",',
		'\t\t\t\t\t\t\t"message": 1',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t},',
		'\t\t\t\t{',
		'\t\t\t\t\t"owner": "cmake",',
		'\t\t\t\t\t"fileLocation": [',
		'\t\t\t\t\t\t"relative",',
		'\t\t\t\t\t\t"${workspaceRoot}/src"',
		'\t\t\t\t\t],',
		'\t\t\t\t\t"pattern": [',
		'\t\t\t\t\t\t{',
		'\t\t\t\t\t\t\t"regexp": "^\\\\s+(\\\\w.*):(\\\\d+)\\\\s+(.+)$",',
		'\t\t\t\t\t\t\t"file": 1,',
		'\t\t\t\t\t\t\t"line": 2,',
		'\t\t\t\t\t\t\t"message": 3',
		'\t\t\t\t\t\t}',
		'\t\t\t\t\t]',
		'\t\t\t\t}',
		'\t\t\t]',
		'\t\t},',
		'\t\t{',
		'\t\t\t"taskName": "Remote Deploy",',
		'\t\t\t"args": [',
		'\t\t\t\t"echo \\"Remote Arguments not configured!\\""',
		'\t\t\t],',
		'\t\t\t"isBuildCommand": true',
		'\t\t}',
		'\t]',
		'}'
	].join('\n')
};

export let templates: TaskEntry[] = [rosBuild].sort((a, b) => {
	return (a.sort || a.label).localeCompare(b.sort || b.label);
});
// templates.push(command);
