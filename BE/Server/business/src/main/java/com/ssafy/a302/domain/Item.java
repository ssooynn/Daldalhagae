package com.ssafy.a302.domain;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class Item {
    @Column(name ="NAME")
    private String name;
    @Column(name ="IMAGE")
    private String image;

    public String getName() {
        return this.name;
    }

    public String getImage() {
        return this.image;
    }
}
