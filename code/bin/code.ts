#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CodeStack } from '../lib/code-stack';

const app = new cdk.App();
const stack = new CodeStack(app, 'CodeStack');
Aspects.of(stack).add()