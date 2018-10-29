describe("logic", () => {
  describe("search artists", () => {
    it("should succeed on searching artist", () => {
      var query = "linkin park"

      return logic.searchArtists(query)
        .then(response => {
          expect(response).toBeDefined()
          expect(response.artists.items.length).toBeGreaterThan(0)
        })
    })

    it("should fail on searching empty artist", () => {
      var query = ""

      expect(function () {
        return logic.searchArtists(query)
          .then(response => {
            throw Error("expected to fail")
          })
      }).toThrowError(TypeError, ' is empty or blank');
    })
  })

  describe("list albums", () => {
    it("should succeed on list artist albums", () => {
      var id = "6XyY86QOPPrYVGvF9ch6wz" // linkin park

      return logic.listAlbums(id)
        .then(response => {
          expect(response).toBeDefined()
          expect(response.items.length).toBeGreaterThan(0)
        })
    })

    it("should fail on searching empty id album", () => {
      var query = ""

      expect(function () {
        return logic.listAlbums(query)
          .then(response => {
            throw Error("expected to fail")
          })
      }).toThrowError(TypeError, ' is empty or blank');
    })
  })

  describe("list tracks", () => {
    it("should succeed on list album tracks", () => {
      var id = "5uvXx5ZQswNRFCdHR521YZ" // a thousand suns

      return logic.listTracks(id)
        .then(response => {
          expect(response).toBeDefined()
          expect(response.items.length).toBeGreaterThan(0)
        })
    })

    it("should fail on searching empty id tracks", () => {
      var id = ""
  
      expect(function () {
        return logic.listTracks(id)
          .then(response => {
            throw Error("expected to fail")
          })
      }).toThrowError(TypeError, ' is empty or blank');
    })
  })
})