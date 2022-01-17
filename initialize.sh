#!/bin/bash
npm run migrate && npm run database:sync && npm run build && npm run start