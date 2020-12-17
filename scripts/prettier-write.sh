#!/bin/bash

prettier --write $npm_package_directories_source_application
prettier --write $npm_package_directories_source_public/scss/
prettier --write $npm_package_directories_config
prettier --write $npm_package_directories_bin