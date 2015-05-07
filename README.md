# PromDate.io

A website that brings web startups and early technology adopters
together for feedback and beta testing. Visit the [promdate.io](https://promdate.io)
site to try it out and learn more.

This repository contains the entirety of the frontend code that runs
the promdate.io site over the [BowTie](https://bowtie.io/) platform. The
matching engine is provided by the
[datamatch](https://github.com/isaiahbacca/datamatch) application, which was
a contender in the Albuquerque 2015 Springboard Competition. It's otherwise
powered by [Jekyll](http://jekyllrb.com).

## Installation/Configuration

* Create a BowTie account at https://bowtie.io/ and create a new Project to host your version of the PromDate.io application.
* Clone this repository (`git clone git@github.com:isaiahbacca/datamatch`), add your Project's repository URL as a secondary remote, and push.
* Install and configure the DataMatch application as your Projects' BowTie backend. Set up a webhook to "http://yourdatamatchserver/webhooks/bowtie"
* Adjust branding and content as appropriate.
