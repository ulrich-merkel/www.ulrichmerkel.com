#!/bin/bash

prettier --check $npm_package_directories_source_application
prettier --check $npm_package_directories_source_public/scss/
prettier --check $npm_package_directories_config
prettier --check $npm_package_directories_bin