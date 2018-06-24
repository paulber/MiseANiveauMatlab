FROM jupyter/base-notebook

USER root

RUN apt-get update -yqq \
 && apt-get install -yqq \
      octave \
 && apt-get autoclean \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

USER jovyan

#jupyter nbextension enable --py --sys-prefix widgetsnbextension
RUN conda install octave \
 && conda install octave_kernel
